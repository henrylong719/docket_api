import { ApolloError } from 'apollo-server-express';
import { createModule } from 'graphql-modules';
import db from '../../db';
import { UserPayload } from '../../generated-types/graphql';
import { loadTypeDefFromFile } from '../../utils/graphql-parser';

const typeDefs = loadTypeDefFromFile('src/modules/user/user_typedefs.graphql');

export const UserModule = createModule({
  id: 'user',
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      users: async (_: any, args: any) => {
        try {
          const users = await db.query('SELECT * FROM users');

          return users.rows;
        } catch (err: any) {
          throw new ApolloError(err);
        }
      },

      user: async (_: any, args: any) => {
        try {
          const user = await db.query('SELECT * FROM users WHERE id = $1', [
            args.id,
          ]);

          return {
            success: true,
            results: user.rows.length,
            data: {
              user: user.rows[0],
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
