import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

/**
 * Book input for books' mutations.
 */
export const bookInputType: DocumentNode = gql`
  input BookInput {
    id: ID!
    title: String!
    author: String!
  }
`;
