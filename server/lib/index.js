const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { resolvers } = require("../schema/resolvers/resolver");
const { jsFrameworkSchema } = require("../schema/type-Defs/jsFramework.schema");

const Server = async () => {
  const apolloServer = new ApolloServer({
    typeDefs: jsFrameworkSchema,
    resolvers
  });
  const app = express();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  //Listening to our server
  app.listen(5100, () => {
    console.log(
      "GraphQL server with Express running on localhost:5100/graphql"
    );
  });
};

Server();
