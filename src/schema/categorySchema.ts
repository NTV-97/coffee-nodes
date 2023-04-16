import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const categorySchema: DocumentNode = gql`
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
