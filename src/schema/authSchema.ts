import { gql } from 'apollo-server-express';

export const authSchema = gql`
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
    role: UserRole!
  }
  extend type Mutation {
    signup(registerInput: RegisterInput): Login!
    login(email: String, phoneNumber: String, password: String!): Login!
  }
`;
