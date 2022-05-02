/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace TodoModule {
  interface DefinedFields {
    Todo: 'id' | 'title' | 'completed' | 'created_at' | 'updated_at' | 'user';
    Query: 'todos' | 'todo';
    TodoPayload: 'success' | 'results' | 'error' | 'data';
    Mutation: 'createTodo' | 'updateTodo' | 'deleteTodo';
  };
  
  interface DefinedInputFields {
    TodoCreateInput: 'title' | 'completed' | 'user';
    TodoUpdateInput: 'title' | 'completed';
  };
  
  export type Todo = Pick<Types.Todo, DefinedFields['Todo']>;
  export type TodoCreateInput = Pick<Types.TodoCreateInput, DefinedInputFields['TodoCreateInput']>;
  export type TodoUpdateInput = Pick<Types.TodoUpdateInput, DefinedInputFields['TodoUpdateInput']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type User = Types.User;
  export type TodoPayload = Pick<Types.TodoPayload, DefinedFields['TodoPayload']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  
  export type Scalars = Pick<Types.Scalars, 'Date'>;
  export type DateScalarConfig = Types.DateScalarConfig;
  
  export type TodoResolvers = Pick<Types.TodoResolvers, DefinedFields['Todo'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type TodoPayloadResolvers = Pick<Types.TodoPayloadResolvers, DefinedFields['TodoPayload'] | '__isTypeOf'>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  
  export interface Resolvers {
    Todo?: TodoResolvers;
    Query?: QueryResolvers;
    TodoPayload?: TodoPayloadResolvers;
    Mutation?: MutationResolvers;
    Date?: Types.Resolvers['Date'];
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Todo?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      title?: gm.Middleware[];
      completed?: gm.Middleware[];
      created_at?: gm.Middleware[];
      updated_at?: gm.Middleware[];
      user?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      todos?: gm.Middleware[];
      todo?: gm.Middleware[];
    };
    TodoPayload?: {
      '*'?: gm.Middleware[];
      success?: gm.Middleware[];
      results?: gm.Middleware[];
      error?: gm.Middleware[];
      data?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createTodo?: gm.Middleware[];
      updateTodo?: gm.Middleware[];
      deleteTodo?: gm.Middleware[];
    };
  };
}