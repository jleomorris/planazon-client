const Category = {
  products: (parent, args, { products }) => {
    console.log(parent);
    return products.filter(() => product.category === parent.id);
  },
};

module.exports = Category;
