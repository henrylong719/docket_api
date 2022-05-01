import { gql } from 'graphql-modules';

export const usersTypeDefs = gql`
  # Types

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!

    # Interface required
    created_at: Date!
    updated_at: Date!
  }

  # inputs
  input UserCreateInput {
    name: String!
    email: String!
    password: String!
    isAdmin: Boolean!
  }

  input UserUpdateInput {
    name: String!
    email: String!
    password: String!
    isAdmin: Boolean!
  }
`;
