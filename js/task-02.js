const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

let ingredientsArr = [];

ingredients.forEach(function(ingredient) {
  const ListItem = document.createElement('li');
  ListItem.textContent = ingredient;
  ListItem.classList = 'item';
  return ingredientsArr.push(ListItem);
});

ingredientsRef.append( ... ingredientsArr);
