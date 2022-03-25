const { ApolloServer } = require("apollo-server");
const { mainCards, animals, categories } = require("./db");
const typeDefs = require("./schema");
// Resolvers
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Category = require("./resolvers/Category");
const Animal = require("./resolvers/Animal");

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Mutation, Category, Animal },
  context: {
    mainCards,
    animals,
    categories,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
