"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.productSchema = (0, apollo_server_express_1.gql) `
  scalar Date
  type Size {
    name: String!
    price: Float!
  }
  type Topping {
    name: String!
    price: Float!
  }
  type ProductDetail {
    size: [Size]
    topping: [Topping]
  }
  type Product {
    id: ID!
    name: String!
    price: Float!
    image: String
    category: Category!
    description: String
    details: ProductDetail
    createdAt: Date!
    updatedAt: Date!
  }
  input SizeInput {
    name: String!
    price: Float!
  }
  input ToppingInput {
    name: String!
    price: Float!
  }
  input ProductDetailInput {
    size: [SizeInput]
    topping: [ToppingInput]
  }
  input ProductInput {
    name: String!
    category: ID!
    description: String
    details: ProductDetailInput
    price: Float!
    image: String
  }
  type Success {
    message: String!
    success: Boolean!
  }
  extend type Query {
    getProduct(id: ID!): Product
    getProducts: [Product]
  }
  extend type Mutation {
    createProduct(product: ProductInput!): Product!
    updateProduct(id: ID!, product: ProductInput!): Product!
    deleteProduct(id: ID!): Success!
  }
`;
//# sourceMappingURL=productSchema.js.map