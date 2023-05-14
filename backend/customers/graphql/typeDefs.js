const { gql } = require("apollo-server");

module.exports = gql`
  type Customer {
    name: String
    email: String
    age: Int
    createdAt: String
  }

  input CustomerInput {
    name: String
    email: String
    age: Int
  }

  input EditCustomerInput {
    name: String
    email: String
    age: Int
  }

  type Query {
    customer(ID: ID!): Customer!
    getCustomers(amount: Int): [Customer]
  }

  type Mutation {
    createCustomer(customerInput: CustomerInput): Customer!
    deleteCustomer(ID: ID!): Boolean
    editCustomer(ID: ID!, editCustomerInput: EditCustomerInput): Boolean
  }
`;
