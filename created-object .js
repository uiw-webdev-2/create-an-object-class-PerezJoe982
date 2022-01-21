/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

// Name,Height,Color,Shelves,Computer,
const BedroomBookshelf = new Backpack(
  "3ft 6in",
  "White",
  3,
  true,
);


const content = `<h1>Bedroom Bookshelf</h1>
<ul>
  <li> What is the height of the self? ${BedroomBookshelf.Height}</li>
  <li> What is the color of the shelf? ${BedroomBookshelf.Color}</li>
  <li> How many shelves does it have? ${BedroomBookshelf.Shelves}</li>
  <li> is your computer sitting on it?  ${BedroomBookshelf.Computer}</li>
</ul>`;

document.body.innerHTML = content;

console.log("The Bedroom Bookshelf object:", BedroomBookshelf);
console.log("The pocketNum value:", BedroomBookshelf.pocketNum);