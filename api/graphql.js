const { ApolloServer } = require("apollo-server");
const { mainCards, products, categories } = require("./db");
const typeDefs = require("./schema");
// Resolvers
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Category = require("./resolvers/Category");
const Product = require("./resolvers/Product");

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers: { Query, Mutation, Category, Product },
  context: {
    mainCards,
    products,
    categories,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
