#!/usr/bin/env node

var file = require('fs');
const fetch = require('node-fetch');
file.readFileSync('input.txt').toString().split("\n").filter(line => line.length > 0)
  .forEach(pokemon => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(response => response.json()) 
      .then(data => {
        console.log(`${capitalize(data.name)}: ${data.types.map(classification => classification.type.name).join(', ')}`)
        })
      .catch(error => console.error(error));
  });

function capitalize (string) { return string[0].toUpperCase() + string.substr(1)}
 
