import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { createApplication } from 'graphql-modules';
import { docketModules } from './src/modules';
require('dotenv').config();

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const application = createApplication({
    modules: docketModules,
  });

  const schema = application.createSchemaForApollo();

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  httpServer.listen({ port: 4000 }, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
}

startApolloServer().catch(console.error);
