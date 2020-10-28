import { IResolvers } from 'apollo-server-express';
import { booksQueries, booksMutations, bookExternalResolvers } from './booksResolvers';

export const resolvers: IResolvers = {
  ...bookExternalResolvers,
  Query: {
    ...booksQueries,
  },
  Mutation: {
    ...booksMutations,
  },
  //   Subscription: {
  //     ...UserSubscription
  //   }
};
