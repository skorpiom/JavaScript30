const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {

return cities.filter( place => {
  const regex = new RegExp(wordToMatch, 'gi');
  return  place.city.match(regex) || place.state.match(regex);
});


}

function displayMatches()
{
  const matchArray = findMatches(this.value,cities);

  const html = matchArray.map(el => {
    const regex = new RegExp(this.value,'gi');
    const cityName = el.city.replace(regex,`<span class="hl">${this.value}</span>`);
    const stateName = el.state.replace(regex,`<span class="hl">${this.value}</span>`);

    return `

    <li>
    <span class="name"> ${cityName}, ${stateName} </span>
    <span class="population">${el.population} </span>
    </li>
    `;
  }).join('');

  suggestions.innerHTML = html;

  console.log(matchArray);
}

const searchPlaces = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchPlaces.addEventListener('change',displayMatches);
searchPlaces.addEventListener('keyup',displayMatches);
