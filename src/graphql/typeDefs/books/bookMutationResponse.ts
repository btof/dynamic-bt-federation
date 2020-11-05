import { gql, ITypedef } from 'apollo-server-express';
/**
 * A type you can use to query after mutation.
 */

export const bookMutationResponse: ITypedef = gql`
  type BookMutationResponse {
    success: Boolean!
    message: String!
    books: [Book]
    book: Book
  }
`;
