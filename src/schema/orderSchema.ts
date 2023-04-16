import { gql } from 'apollo-server-express';

export const orderSchema = gql`
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
