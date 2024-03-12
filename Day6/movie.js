

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries from Asia continent/region
    const asiaCountries = data.filter(country => country.region === 'Asia');

    // Print the list of countries from Asia
    console.log("Countries from Asia:", asiaCountries.map(country => country.name.common));
  })
  .catch(error => console.error('Error fetching data:', error));