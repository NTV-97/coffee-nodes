"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const userSchema_1 = require("./userSchema");
exports.authSchema = (0, apollo_server_express_1.gql) `
  type Login {
    message: String!
    token: String
  }
  input RegisterInput {
    name: String
    phoneNumber: String!
    address: String
    email: String!
    password: String!
  }
  extend type Mutation {
    signup(registerInput: RegisterInput): Login!
    login(email: String, phoneNumber: String, password: String!): Login!
  }
  ${userSchema_1.userSchema}
`;
//# sourceMappingURL=authSchema.js.map