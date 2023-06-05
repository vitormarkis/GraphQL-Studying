import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from "node:crypto";

const typeDefs = gql`
  type User {
    id: String
    name: String
    age: Int
  }

  type Query {
    users: [User]!
  }

  type Mutation {
    createUser(name: String!, age: Int!): User!
  }
`;

interface IUser {
  id: string;
  name: string;
  age: number;
}

const users: IUser[] = [];

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return users;
      },
    },
    Mutation: {
      createUser: (parent, args, ctx) => {
        const { name, age } = args;
        const user: IUser = {
          id: randomUUID(),
          name,
          age,
        };

        users.push(user);
        return user;
      },
    },
  },
});

server.listen().then(({ url }) => {
  console.log("Server is running on " + url);
});
