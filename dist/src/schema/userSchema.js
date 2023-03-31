"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.userSchema = (0, apollo_server_express_1.gql) `
  type User {
    id: ID!
    name: String
    phoneNumber: String!
    address: String
    email: String!
  }
  type Success {
    message: String!
    success: Boolean!
  }
  extend type Query {
    getUser(id: ID!): User!
    getUsers: [User!]
  }
  extend type Mutation {
    editUser(
      id: ID!
      email: String
      phoneNumber: String
      password: String
      name: String
      address: String
    ): User!
    deleteUser(id: ID!): Success!
  }
`;
//# sourceMappingURL=userSchema.js.map