import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
/**
 * A type you can use to query after mutation.
 */

export const bookMutationResponse: DocumentNode = gql`
  type BookMutationResponse {
    success: Boolean!
    message: String!
    books: [Book]
    book: Book
  }
`;
