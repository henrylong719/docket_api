/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace UserModule {
  interface DefinedFields {
    User: 'id' | 'name' | 'email' | 'password' | 'created_at' | 'updated_at';
    UserPayload: 'success' | 'user' | 'error';
    Query: 'users' | 'user';
    Mutation: 'createUser' | 'updateUser' | 'deleteUser';
  };
  
  interface DefinedInputFields {
    UserCreateInput: 'name' | 'email' | 'password' | 'isAdmin';
    UserUpdateInput: 'name' | 'email' | 'password' | 'isAdmin';
  };
  
  export type User = Pick<Types.User, DefinedFields['User']>;
  export type UserCreateInput = Pick<Types.UserCreateInput, DefinedInputFields['UserCreateInput']>;
  export type UserUpdateInput = Pick<Types.UserUpdateInput, DefinedInputFields['UserUpdateInput']>;
  export type UserPayload = Pick<Types.UserPayload, DefinedFields['UserPayload']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  
  export type Scalars = Pick<Types.Scalars, 'Date'>;
  export type DateScalarConfig = Types.DateScalarConfig;
  
  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields['User'] | '__isTypeOf'>;
  export type UserPayloadResolvers = Pick<Types.UserPayloadResolvers, DefinedFields['UserPayload'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  
  export interface Resolvers {
    User?: UserResolvers;
    UserPayload?: UserPayloadResolvers;
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Date?: Types.Resolvers['Date'];
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    User?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      email?: gm.Middleware[];
      password?: gm.Middleware[];
      created_at?: gm.Middleware[];
      updated_at?: gm.Middleware[];
    };
    UserPayload?: {
      '*'?: gm.Middleware[];
      success?: gm.Middleware[];
      user?: gm.Middleware[];
      error?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      users?: gm.Middleware[];
      user?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createUser?: gm.Middleware[];
      updateUser?: gm.Middleware[];
      deleteUser?: gm.Middleware[];
    };
  };
}