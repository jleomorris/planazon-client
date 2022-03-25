const Category = {
  animals: (parent, args, { animals }) => {
    console.log(parent);
    return animals.filter((animal) => animal.category === parent.id);
  },
};

module.exports = Category;
