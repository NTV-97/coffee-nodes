"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.cartSchema = (0, apollo_server_express_1.gql) `
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
//# sourceMappingURL=cartSchema.js.map