const { gql } = require("apollo-server-express");

const jsFrameworkSchema = gql`
  type Framework {
    id: ID!
    name: String!
    img: String!
  }
  type Query {
    allFrameworks: [Framework!]!
    framework(id: ID!): Framework!
  }
`;
module.exports = { jsFrameworkSchema };
