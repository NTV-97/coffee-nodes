"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const userResolver_1 = require("./userResolver");
const authResolver_1 = require("./authResolver");
const categoryResolver_1 = require("./categoryResolver");
const productResolver_1 = require("./productResolver");
const cartResolver_1 = require("./cartResolver");
const orderResolver_1 = require("./orderResolver");
const lodash_1 = __importDefault(require("lodash"));
const graphql_1 = require("graphql");
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
const dateScalar = new graphql_1.GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
        return value.getTime(); // Convert outgoing Date to integer for JSON
    },
    parseValue(value) {
        return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral(ast) {
        if (ast.kind === graphql_1.Kind.INT) {
            return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
        }
        return null; // Invalid hard-coded value (not an integer)
    },
});
exports.resolvers = lodash_1.default.merge({}, userResolver_1.userResolvers, authResolver_1.authResolvers, categoryResolver_1.categoryResolvers, productResolver_1.productResolvers, cartResolver_1.cartResolvers, orderResolver_1.orderResolvers, { Date: dateScalar });
//# sourceMappingURL=index.js.map