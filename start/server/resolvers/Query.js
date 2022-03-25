const Query = {
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
};

module.exports = Query;
