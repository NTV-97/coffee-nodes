"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.userSchema = (0, apollo_server_express_1.gql) `
  scalar TypeUser
  type User {
    id: ID!
    password: String!
    type: TypeUser!
    adminId: String
    email: String!
    phoneNumber: String!
  }
  type Login {
    message: String!
    token: String
  }
  type Success {
    message: String!
    success: Boolean!
  }
  extend type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }
  extend type Mutation {
    # signup(email: String!, password: String!, type: TypeUser!): Success!
    # login(email: String!, password: String!): Login!
    # createUser(email: String!, password: String!, type: TypeUser!): Success!
    # editUser(id: ID!, email: String!, password: String, type: TypeUser): User!
    signup(email: String!, phoneNumber: String!, password: String!, type: TypeUser!): Success!
    login(email: String, phoneNumber: String, password: String!): Login!
    createUser(email: String, phoneNumber: String, password: String!, type: TypeUser!): Success!
    editUser(id: ID!, email: String, phoneNumber: String, password: String!, type: TypeUser!): User!
    deleteUser(id: ID!): Success!
  }
`;
//# sourceMappingURL=userSchema.js.map