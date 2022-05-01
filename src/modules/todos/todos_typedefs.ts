import { gql } from 'graphql-modules';

export const todosTypeDefs = gql`
  # Types

  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!

    # Interface required
    created_at: Date!
    updated_at: Date!
  }

  input TodoCreateInput {
    title: String!
    completed: Boolean!
    user: ID!
  }

  input TodoUpdateInput {
    title: String
    completed: Boolean
  }
`;
