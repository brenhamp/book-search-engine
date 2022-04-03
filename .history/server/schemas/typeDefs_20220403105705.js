// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        savedBooks: [Book]
    }
    type Book {
        bookId: String
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users: [User]
        user(_id: String, username: String): User
        me: User
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(bookId: String!, authors: [String]!, description: String, image: String, link: String, title: String!): User
        removeBook(bookId: String!): User
    }
`;

// export the typeDefs
module.exports = typeDefs;