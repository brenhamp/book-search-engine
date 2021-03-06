// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    me: type User
  }
`;

// export the typeDefs
module.exports = typeDefs;