"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const userSchema_1 = require("./userSchema");
const baseSchema = (0, apollo_server_express_1.gql) `
  type Query
  type Mutation
`;
exports.typeDefs = [
    baseSchema,
    userSchema_1.userSchema,
    // menuSchema,
    // tableSchema,
    // merchandiseGroupSchema,
    // merchandiseSchema,
    // unitMerchandiseSchema,
    // orderSchema,
    // billSchema,
    // revenueSchema,
];
//# sourceMappingURL=index.js.map