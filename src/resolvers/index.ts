import { userResolvers } from './userResolver';
import { authResolvers } from './authResolver';
import { categoryResolvers } from './categoryResolver';
import { productResolvers } from './productResolver';
import { cartResolvers } from './cartResolver';
import { orderResolvers } from './orderResolver';
import _ from 'lodash';
import { GraphQLScalarType, Kind } from 'graphql';

// const typeUserScalar = new GraphQLScalarType({
//   name: 'TypeUser',
//   description: "User type: 'admin' | 'manage' | 'staff'",
//   serialize: typeUserValue,
//   parseValue: typeUserValue,
//   parseLiteral(ast) {
//     if (ast.kind === Kind.STRING) {
//       return typeUserValue(ast.value);
//     }
//     throw new UserInputError("The field type must be 'admin' | 'manage' | 'staff'");
//   },
// });

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value: any) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value: any) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

export const resolvers = _.merge(
  {},
  userResolvers,
  authResolvers,
  categoryResolvers,
  productResolvers,
  cartResolvers,
  orderResolvers,
  { Date: dateScalar },
  // { TypeUser: typeUserScalar },
);
