import { createModule, gql } from 'graphql-modules';
import { usersTypeDefs } from './users_typedefs';

export const TodoModule = createModule({
  id: 'users',
  dirname: __dirname,
  typeDefs: [usersTypeDefs],
  resolvers: {},
});
