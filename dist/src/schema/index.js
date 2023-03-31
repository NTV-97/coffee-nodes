"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const userSchema_1 = require("./userSchema");
const authSchema_1 = require("./authSchema");
const categorySchema_1 = require("./categorySchema");
const productSchema_1 = require("./productSchema");
const cartSchema_1 = require("./cartSchema");
const orderSchema_1 = require("./orderSchema");
const baseSchema = (0, apollo_server_express_1.gql) `
  type Query
  type Mutation
`;
exports.typeDefs = [
    baseSchema,
    userSchema_1.userSchema,
    authSchema_1.authSchema,
    categorySchema_1.categorySchema,
    productSchema_1.productSchema,
    cartSchema_1.cartSchema,
    orderSchema_1.orderSchema,
];
//# sourceMappingURL=index.js.map