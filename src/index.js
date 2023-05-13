import { remove, choice } from "./helpers.js";
import FRUITS from "./fruits.js";

function app(fruits_array) {
  const rand_fruit = choice(fruits_array);
  console.log(`I'd like one ${rand_fruit}, please`);
  console.log(`Here you go, ${rand_fruit}`);
  console.log("Delicious, may I have another?");
  remove(fruits_array, rand_fruit);
  console.log(
    `I'm sorry, we're all out. We have ${fruits_array.length} fruits left`
  );
}

app(FRUITS);
