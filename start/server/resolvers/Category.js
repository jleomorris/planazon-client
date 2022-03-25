const Category = {
  animals: (parent, args, ctx) => {
    console.log(parent);
    return animals.filter((animal) => animal.category === parent.id);
  },
};

module.exports = Category;
