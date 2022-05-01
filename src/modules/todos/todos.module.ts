import { createModule, gql } from 'graphql-modules';
import { todosTypeDefs } from './todos_typedefs';

export const TodoModule = createModule({
  id: 'todos',
  dirname: __dirname,
  typeDefs: [todosTypeDefs],
  resolvers: {},
});
