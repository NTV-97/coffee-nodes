"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.orderSchema = (0, apollo_server_express_1.gql) `
  scalar Date
  enum OrderStatus {
    PENDING
    PROCESSING
    COMPLETED
    CANCELLED
  }
  type OrderItem {
    product: Product
    quantity: Int!
    size: String!
    toppings: [String]
    price: Float!
  }
  type Order {
    id: ID!
    user: User!
    items: [OrderItem!]!
    totalPrice: Float!
    status: OrderStatus!
    note: String!
    createdAt: Date
    updatedAt: Date
  }

  type Success {
    message: String!
    success: Boolean!
  }

  extend type Query {
    getOrders: [Order!]!
    getOrder(id: ID!): Order
    getAllOrders: [Order!]!
  }

  extend type Mutation {
    placeOrder(idCart: ID!, note: String): Order
    updateOrderStatus(id: ID!, status: OrderStatus!): Order
    cancelOrder(id: ID!): Order
    deleteAllOrders: Success
  }
`;
//# sourceMappingURL=orderSchema.js.map