import { gql } from 'apollo-server-express';

export const userSchema = gql`
  enum UserRole {
    ADMIN
    USER
  }
  type User {
    id: ID!
    name: String
    phoneNumber: String!
    address: String
    email: String!
    role: UserRole!
  }
  type Success {
    message: String!
    success: Boolean!
  }
  extend type Query {
    getUser: User!
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
