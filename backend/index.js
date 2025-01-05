import { ApolloServer } from "@apollo/server";
import express from "express";
import http from "http";
import cors from "cors";
import MergeResolvers from "./resolvers/index.js";
import MergeTypeDefs from "./typeDefs/index.js";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
dotenv.config();
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs: MergeTypeDefs,
  resolvers: MergeResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use(
  "/",
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

connectDB()
  .then(
    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))
  )
  .catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
