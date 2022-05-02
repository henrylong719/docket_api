import { createModule } from 'graphql-modules';
import db from '../../db';
import { UserPayload } from '../../generated-types/graphql';
import { loadTypeDefFromFile } from '../../utils/graphql-parser';

const typeDefs = loadTypeDefFromFile('src/modules/user/user_typedefs.graphql');

export const UserModule = createModule({
  id: 'users',
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      user: async (_: any, args: any) => {
        try {
          const userData = await db.query('SELECT * FROM users');
          return {
            success: true,
            results: userData.rows.length,
            data: {
              users: userData.rows,
            },
          };
        } catch (err) {
          return {
            success: false,
            error: err,
          } as UserPayload;
        }
      },
    },
    Mutation: {},
  },
});
