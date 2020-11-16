{/* <a class="card" href="#">
<img class="card__background" src="http://www.serebii.net/pokemongo/pokemon/001.png" width="120" height="120">
</img>
<div class="card__content">
  <p class="card__category">Category</p>
  <h3 class="card__heading">Example Card Heading</h3>
</div>
</a> */}

// Choosing elements
var elPokemonsWrapper = $('.js-pokemons-wrapper');

// for (var i = 0; i < pokemons.length; i++) {
//   var elPokemonCard = createElement('a', 'card');
//   elPokemonCard.setAttribute('href', '#');

//   var elPokemonImage = createElement('img', 'card__background');
//   elPokemonImage.setAttribute('src', pokemons[i].img);

//   var elPokemonName = createElement('h3', 'card__heading');
//   elPokemonName.textContent = pokemons[i].name;

//   var elPokemonType = createElement('div', 'card__category');
//   elPokemonType.textContent = pokemons[i].type;

//   elPokemonCard.appendChild(elPokemonImage);
//   elPokemonCard.appendChild(elPokemonName);
//   elPokemonCard.appendChild(elPokemonType);
//   elPokemonsWrapper.appendChild(elPokemonCard);
// };

pokemons.forEach(function (pokemon) {
  var elPokemonCard = createElement('div', 'card');

  var elPokemonImage = createElement('img', 'card__background');
  elPokemonImage.setAttribute('src', pokemon.img);

  var elPokemonName = createElement('h3', 'card__heading');
  elPokemonName.textContent = pokemon.name;

  var elPokemonType = createElement('div', 'card__category');
  elPokemonType.textContent = pokemon.type;

  elPokemonCard.appendChild(elPokemonImage);
  elPokemonCard.appendChild(elPokemonName);
  elPokemonCard.appendChild(elPokemonType);
  elPokemonsWrapper.appendChild(elPokemonCard);
});
