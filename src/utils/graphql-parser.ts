import { DocumentNode } from 'graphql';
import { readFileSync } from 'fs';
import { gql } from 'apollo-server-express';

export function loadTypeDefFromFile(path: string): DocumentNode {
  const typeDefsString = readFileSync(path, { encoding: 'utf-8' });
  const typeDefs = gql(typeDefsString);
  return typeDefs;
}
