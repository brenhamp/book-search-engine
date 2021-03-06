// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    users: [User]
    user: (_id: String, username: String): User
    me: User
  }

  type Mutation {
      login(email: String!, passwords: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      saveBook(
        authors: [String]!, 
        description: String, 
        title: String!, 
        bookId: String!, 
        image: String, 
        link: String)
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
      bookId: String
      authors: [String]
      description: String
      title: String
      image: String
      link: String
  }

  type Auth {
      token: ID!
      user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;