const product = {
  idMeal: "52772",
  strMeal: "Teriyaki Chicken Casserole",
  strDrinkAlternate: null,
  strCategory: "Chicken",
  strArea: "Japanese",
  strTags: "Meat,Casserole",
  strYoutube: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
  strIngredient1: "soy sauce",
  strIngredient2: "water",
  strIngredient3: "brown sugar",
  strIngredient4: "ground ginger",
  strIngredient5: "minced garlic",
  strIngredient6: "cornstarch",
  strIngredient7: "chicken breasts",
  strIngredient8: "stir-fry vegetables",
  strIngredient9: "brown rice",
  strIngredient10: "",
  strIngredient11: "",
  strIngredient12: "",
  strIngredient13: "",
  strIngredient14: "",
  strIngredient15: "",
  strIngredient16: null,
  strIngredient17: null,
  strIngredient18: null,
  strIngredient19: null,
  strIngredient20: null,
  strMeasure1: "3/4 cup",
  strMeasure2: "1/2 cup",
  strMeasure3: "1/4 cup",
  strMeasure4: "1/2 teaspoon",
  strMeasure5: "1/2 teaspoon",
  strMeasure6: "4 Tablespoons",
  strMeasure7: "2",
  strMeasure8: "1 (12 oz.)",
  strMeasure9: "3 cups",
  strMeasure10: "",
  strMeasure11: "",
  strMeasure12: "",
  strMeasure13: "",
  strMeasure14: "",
  strMeasure15: "",
  strMeasure16: null,
  strMeasure17: null,
  strMeasure18: null,
  strMeasure19: null,
  strMeasure20: null,
  strSource: null,
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,
};

const ingredients = [];

for (let i = 1; i <= 20; i++) {
  const ingredient = product[`strIngredient${i}`];
  if (ingredient != "" && ingredient != null) {
    ingredients.push(ingredient);
  }
}

console.log(ingredients);
