import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver.js";
import transactionsResolver from "./transaction.resolver.js";

const resolvers = mergeResolvers([userResolver, transactionsResolver]);
export default resolvers;
