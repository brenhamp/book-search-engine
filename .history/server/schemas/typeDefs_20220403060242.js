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
        link: String!)
        : User
      removeBook(bookId: String!): User
  }

  type User {
      _id: ID
      username: String
      email: String
      bookCount: [Book]
  }

  type Book {
      bookId
  }
`;

// export the typeDefs
module.exports = typeDefs;