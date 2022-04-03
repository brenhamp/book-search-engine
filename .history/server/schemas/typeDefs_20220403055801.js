// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
      login(email: String!, passwords: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      saveBook(
        authors: [String!], 
        description: String!, 
        title: String!, 
        bookId: String!, 
        image: String!, 
        link)
  }
`;

// export the typeDefs
module.exports = typeDefs;