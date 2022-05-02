import { createModule } from 'graphql-modules';
import { TodoPayload } from '../../../server/src/generated-types/graphql';
import db from '../../db';
import { loadTypeDefFromFile } from '../../utils/graphql-parser';

const typeDefs = loadTypeDefFromFile('src/modules/todo/todo_typedefs.graphql');

export const TodoModule = createModule({
  id: 'todos',
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      todo: async (_: any, args: any) => {
        try {
          const todoData = await db.query('SELECT * FROM todos');

          return {
            success: true,
            results: todoData.rows.length,
            data: {
              todos: todoData.rows,
            },
          };
        } catch (err) {
          return {
            success: false,
            error: err,
          } as TodoPayload;
        }
      },
    },
    Mutation: {},
  },
});
