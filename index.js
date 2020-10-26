var file = require('fs');
const fetch = require('node-fetch');
// we probably want to break this out into an async function?
// we would need to use callbacks or use (error,fileData)=>{} notation
file.readFileSync('input.txt').toString().split("\n")
  .forEach(pokemon => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(response => response.json()) 
      // probably want to break the modification of these out for clarity. 
      // maybe create 2 variables, one for name, one for type list. 
      // Still need to uppercase first letter of name
      .then(data => {
        console.log(`${data.name}: ${data.types.map(classification => classification.type.name).join(', ')}`)
        .catch(error => console.log(error))
      });
  });
/* currently returns: 
* pikachu: electric
* charizard: fire, flying
*
*/
