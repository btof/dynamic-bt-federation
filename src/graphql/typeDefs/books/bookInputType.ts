import { gql, ITypedef } from 'apollo-server-express';

/**
 * Book input for books' mutations.
 */
export const bookInputType: ITypedef = gql`
  input BookInput {
    id: ID!
    title: String!
    author: String!
  }
`;
