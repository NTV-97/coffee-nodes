"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const userResolver_1 = require("./userResolver");
const authResolver_1 = require("./authResolver");
const lodash_1 = __importDefault(require("lodash"));
const graphql_1 = require("graphql");
const apollo_server_errors_1 = require("apollo-server-errors");
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
// const typeMerchandiseValue = (value: string | unknown) => {
//   if (value === 'merchandise') {
//     return value;
//   }
//   if (value === 'finished') {
//     return value;
//   }
//   if (value === 'materials') {
//     return value;
//   }
//   throw new UserInputError("The field type must be 'merchandise' | 'finished' | 'materials'");
// };
const typeUserValue = (value) => {
    if (value === 'admin') {
        return value;
    }
    if (value === 'manage') {
        return value;
    }
    if (value === 'staff') {
        return value;
    }
    throw new apollo_server_errors_1.UserInputError("The field type must be 'admin' | 'manage' | 'staff'");
};
// const typeUnitDiscountValue = (value: string | unknown) => {
//   if (value === 'percent') {
//     return value;
//   }
//   if (value === 'value') {
//     return value;
//   }
//   throw new UserInputError("The field type must be 'percent' | 'value'");
// };
// const typeMerchandiseScalar = new GraphQLScalarType({
//   name: 'TypeMerchandise',
//   description: "Merchandise type: 'merchandise' | 'finished' | 'materials'",
//   serialize: typeMerchandiseValue,
//   parseValue: typeMerchandiseValue,
//   parseLiteral(ast) {
//     if (ast.kind === Kind.STRING) {
//       return typeMerchandiseValue(ast.value);
//     }
//     throw new UserInputError("The field type must be 'merchandise' | 'finished' | 'materials'");
//   },
// });
const typeUserScalar = new graphql_1.GraphQLScalarType({
    name: 'TypeUser',
    description: "User type: 'admin' | 'manage' | 'staff'",
    serialize: typeUserValue,
    parseValue: typeUserValue,
    parseLiteral(ast) {
        if (ast.kind === graphql_1.Kind.STRING) {
            return typeUserValue(ast.value);
        }
        throw new apollo_server_errors_1.UserInputError("The field type must be 'admin' | 'manage' | 'staff'");
    },
});
// const typeUnitDiscountScalar = new GraphQLScalarType({
//   name: 'TypeUnitDiscount',
//   description: "Unit discount type: 'percent' | 'value'",
//   serialize: typeUnitDiscountValue,
//   parseValue: typeUnitDiscountValue,
//   parseLiteral(ast) {
//     if (ast.kind === Kind.STRING) {
//       return typeUnitDiscountValue(ast.value);
//     }
//     throw new UserInputError("The field type must be 'percent' | 'value'");
//   },
// });
exports.resolvers = lodash_1.default.merge({}, userResolver_1.userResolvers, 
// menuResolvers,
authResolver_1.authResolvers, 
// tableResolvers,
// merchandiseGroupResolvers,
// merchandiseResolvers,
// unitMerchandiseResolvers,
// { Date: dateScalar },
// { TypeMerchandise: typeMerchandiseScalar },
{ TypeUser: typeUserScalar });
//# sourceMappingURL=index.js.map