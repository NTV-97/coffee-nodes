"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.categorySchema = (0, apollo_server_express_1.gql) `
  scalar Date
  type Category {
    id: ID!
    name: String!
    image: String
    description: String
    createdAt: Date!
    updatedAt: Date!
  }
  input CategoryInput {
    name: String!
    image: String
    description: String
  }
  type Success {
    message: String!
    success: Boolean!
  }
  extend type Query {
    getCategory(id: ID!): Category
    getCategories: [Category!]!
  }
  extend type Mutation {
    createCategory(category: CategoryInput!): Category!
    updateCategory(id: ID!, category: CategoryInput!): Category!
    deleteCategory(id: ID!): Success!
  }
`;
//# sourceMappingURL=categorySchema.js.map