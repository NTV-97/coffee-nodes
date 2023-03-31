"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.orderSchema = (0, apollo_server_express_1.gql) `
  scalar Date
  type Order {
    id: ID!
    user: User!
    products: [ProductOrder!]!
    total: Float!
    status: OrderStatus!
    createdAt: Date!
  }

  type ProductOrder {
    product: Product!
    quantity: Int!
  }

  input ProductOrderInput {
    productId: ID!
    quantity: Int!
  }

  enum OrderStatus {
    PENDING
    PROCESSING
    COMPLETED
    CANCELLED
  }

  extend type Query {
    orders: [Order!]!
    order(id: ID!): Order
  }

  extend type Mutation {
    placeOrder(products: [ProductOrderInput!]!): Order
    updateOrderStatus(id: ID!, status: OrderStatus!): Order
    cancelOrder(id: ID!): Order
  }
`;
//# sourceMappingURL=orderSchema.js.map