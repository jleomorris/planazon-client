const { v4 } = require("uuid");

const Mutation = {
  addAnimal: (
    parent,
    { image, title, rating, price, description, slug, stock, onSale, category },
    { animals }
  ) => {
    let newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category,
    };

    animals.push(newAnimal);
    return newAnimal;
  },
  removeAnimal: (parent, { id }, { animals }) => {
    let indexToDelete = animals.findIndex((animal) => animal.id === id);
    animals.splice(indexToDelete, 1);
    return true;
  },
  updateAnimal: (
    parent,
    {
      id,
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category,
    },
    { animals }
  ) => {
    const indexToUpdate = animals.findIndex((animal) => animal.id === id);
    const oldAnimal = animals[indexToUpdate];
    const newAnimal = {
      image: image === undefined ? oldAnimal["image"] : image,
      title: title === undefined ? oldAnimal["title"] : title,
      rating: rating === undefined ? oldAnimal["rating"] : rating,
      price: price === undefined ? oldAnimal["price"] : price,
      description:
        description === undefined ? oldAnimal["description"] : description,
      slug: slug === undefined ? oldAnimal["slug"] : slug,
      stock: stock === undefined ? oldAnimal["stock"] : stock,
      onSale: onSale === undefined ? oldAnimal["onSale"] : onSale,
      category: category === undefined ? oldAnimal["category"] : category,
    };

    const updatedAnimal = { ...oldAnimal, ...newAnimal };
    animals[indexToUpdate] = updatedAnimal;
    return updatedAnimal;
  },
};

module.exports = Mutation;
