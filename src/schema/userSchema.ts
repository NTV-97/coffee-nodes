import { gql } from 'apollo-server-express';

export const userSchema = gql`
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
