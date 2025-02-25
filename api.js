country = [
  {
    name: "Peru",
    topLevelDomain: [".pe"],
    alpha2Code: "PE",
    alpha3Code: "PER",
    callingCodes: ["51"],
    capital: "Lima",
    altSpellings: ["PE", "Republic of Peru", " República del Perú"],
    subregion: "South America",
    region: "Americas",
    population: 32971846,
    latlng: [-10.0, -76.0],
    demonym: "Peruvian",
    area: 1285216.0,
    gini: 41.5,
    timezones: ["UTC-05:00"],
    borders: ["BOL", "BRA", "CHL", "COL", "ECU"],
    nativeName: "Perú",
    numericCode: "604",
    flags: {
      svg: "https://flagcdn.com/pe.svg",
      png: "https://flagcdn.com/w320/pe.png",
    },
    currencies: [
      {
        code: "PEN",
        name: "Peruvian sol",
        symbol: "S/.",
      },
    ],
    languages: [
      {
        iso639_1: "es",
        iso639_2: "spa",
        name: "Spanish",
        nativeName: "Español",
      },
    ],
    translations: {
      br: "Peru",
      pt: "Peru",
      nl: "Peru",
      hr: "Peru",
      fa: "پرو",
      de: "Peru",
      es: "Perú",
      fr: "Pérou",
      ja: "ペルー",
      it: "Perù",
      hu: "Peru",
    },
    flag: "https://flagcdn.com/pe.svg",
    regionalBlocs: [
      {
        acronym: "PA",
        name: "Pacific Alliance",
        otherNames: ["Alianza del Pacífico"],
      },
      {
        acronym: "USAN",
        name: "Union of South American Nations",
        otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
        otherNames: [
          "Unión de Naciones Suramericanas",
          "União de Nações Sul-Americanas",
          "Unie van Zuid-Amerikaanse Naties",
          "South American Union",
        ],
      },
    ],
    cioc: "PER",
    independent: true,
  },
];
// What is the capital of the country ?

console.log( country.forEach(e => console.log(e.capital)));


// what is the country name ?
console.log(country.map((e) => e.name));


// What is the capital of the country ?

console.log(country.map((e) => e.capital));

// what is the population of the country ?

console.log(country.map((e) => e.population)); // [32971846]


// what are the borders of the first country ?

console.log(country.map((e) => e.borders)); // [ [ 'BOL', 'BRA', 'CHL', 'COL', 'ECU' ] ]    


// what are the currencies of the first country ?
console.log(country.map((e) => e.currencies));
// [ { code: 'PEN', name: 'Peruvian sol', symbol: 'S


// what is the symbol of first currency of the first country ?

console.log(country.map((e) => e.currencies[0].symbol)); // [ 'S/.' ]  


// what are the languages of each country

console.log(country.map((e) => e.languages)); // [ [ { iso639_1: 'es', iso639_2: 'spa', name: 'Spanish', nativeName: 'Español' } ] ]


// what is the name of the first language of the first country ?

a = country[0].languages;
b= a.name;
console.log(a[0].name); // Spanish 


// The zero index (0) is used to access the first element
//  in both the country array and the languages array.
//a[0].name: Accesses the name property of the first language object, which is "Spanish".



