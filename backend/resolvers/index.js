import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver.js";
import transactionsResolver from "./transaction.resolver.js";

const MergeResolvers = mergeResolvers([userResolver, transactionsResolver]);
export default MergeResolvers;
