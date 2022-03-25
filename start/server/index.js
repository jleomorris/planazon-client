const { ApolloServer } = require("apollo-server");
const { mainCards, animals, categories } = require("./db");
const typeDefs = require("./schema");

const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    animal: (parent, args, ctx) => {
      const animal = animals.find((animal) => {
        return animal.slug === args.slug;
      });
      return animal;
    },
    categories: () => categories,
    category: (parent, args, ctx) => {
      const category = categories.find((category) => {
        return category.slug === args.slug;
      });
      return category;
    },
  },
  Category: {
    animals: (parent, args, ctx) => {
      console.log(parent);
      return animals.filter((animal) => animal.category === parent.id);
    },
  },
  Animal: {
    category: (parent, args, ctx) => {
      console.log(parent);
      return categories.find((category) => category.id === parent.category);
      // return animals.filter((animal) => animal.category === parent.id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
