import { ApolloError } from 'apollo-server-express';
import { createModule } from 'graphql-modules';
import db from '../../db';
import { loadTypeDefFromFile } from '../../utils/graphql-parser';

const typeDefs = loadTypeDefFromFile('src/modules/todo/todo_typedefs.graphql');

export const TodoModule = createModule({
  id: 'todo',
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      todos: async (_: any, args: any) => {
        try {
          const todos = await db.query('SELECT * FROM todos');
          return todos.rows;
        } catch (err: any) {
          throw new ApolloError(err);
        }
      },
      todo: async (_: any, args: any) => {
        try {
          const todo = await db.query('SELECT * FROM todos WHERE id = $1', [
            args.id,
          ]);
          return todo.rows[0];
        } catch (error: any) {
          throw new ApolloError(error);
        }
      },
    },
  },
});
