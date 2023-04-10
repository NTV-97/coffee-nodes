import { gql } from 'apollo-server-express';

export const cartSchema = gql`
  scalar Date
  type CartItem {
    product: Product
    quantity: Int!
    size: String
    toppings: [String]
    price: Float!
  }
  type Cart {
    id: ID!
    user: User!
    items: [CartItem!]!
    totalPrice: Float!
    createdAt: Date
    updatedAt: Date
  }

  input CartItemInput {
    productId: ID!
    quantity: Int!
    size: String!
    toppings: [String]
  }
  input CartItemUpdateInput {
    productId: ID!
    quantity: Int!
    size: String!
    toppings: [String]
    cartItemIndex: Int!
  }
  extend type Query {
    getCart: Cart
  }

  extend type Mutation {
    addToCart(items: [CartItemInput!]!): Cart
    updateCartItem(itemsUpdate: [CartItemUpdateInput!]!): Cart
    removeFromCart(cartItemIndex: Int!): Cart
    clearCart: Cart
  }
`;
