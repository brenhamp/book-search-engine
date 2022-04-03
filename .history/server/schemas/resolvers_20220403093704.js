const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({})
    },
    user: async (args) => {
        returnUser.findOne({ args })
    },
    me: async (context) => {
        if (context.user) {
            return User.findOne({ _id: context.user._id }).populate('savedBooks');
        }
    throw new AuthenticationError('Not logged in');
        } 
    },

  Mutation: {
    addUser: async ({ username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async ({ email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, args, context) => {
      if (context.user) {
        const updatedUserBooks = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedBooks: args }},
            { new: true, runValidators: true }
        )

        return updatedUserBooks;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
   removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUserBooks = await User.findOneAndUpdate(
          { _id: context.userId },
          { $pull: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedThought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
