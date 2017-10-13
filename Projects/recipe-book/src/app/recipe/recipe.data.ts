import {Recipe} from "./models/recipe.model";

export const recipes: Recipe[] = [
  {
    name: 'Caesar Salad',
    description: 'Not only is Caesar salad one of my favorite things in the world to eat but it\'s also the first thing I learned to make in my very first restaurant job. Unfortunately,' +
    ' it is loaded with cheese, egg yolks and oil. Let\'s face it: We all pretend we are eating healthy if we are eating a salad, but traditional Caesar dressings (and lots of other creamy' +
    ' dressings) can be big, fat calorie offenders. I discovered that using yogurt instead of oil and eggs still allowed me to keep the creamy texture and garlicky, anchovy flavors of this' +
    ' wonderful dressing without ruining my diet.',
    imgUrl: "https://media4.s-nbcnews.com/j/newscms/2017_41/1288466/missy-robins-semi-healthy-caesar-today-tease-2-171012_ba00aaa94824847b1a974f51a97108e9.today-inline-large.jpg",
    ingredients: [{name: "cloves garlic", amount: 5}, {name: "anchovy filets", amount: 5}, {name: "Dijon mustard", amount: 3}, {name: "yogurt", amount: 1} ]
  },
  {
    name: 'Cacio e Pepe Kugel',
    description: 'This dish takes my Jewish heritage and love for Italian food and combines them in a traditional noodle ' +
    'kugel filled with the flavors of cacio e pepe, a traditional Roman spaghetti dish. The result is a super simple dish packed with tons of pepper and the creaminess of Pecorino, ' +
    'creating an indulgent comfort food from two cultures meeting in the middle.!',
    imgUrl: "https://media3.s-nbcnews.com/j/newscms/2017_41/1288467/missy-robins-kugel-today-tease-2-171012_ba00aaa94824847b1a974f51a97108e9.today-inline-large.jpg",
    ingredients: [{name: "kosher salt", amount: 1}, {name: "ricotta", amount: 2}, {name: "Pecorino Romano cheese", amount: 3}, {name: "butter", amount: 2} ]
  }];
