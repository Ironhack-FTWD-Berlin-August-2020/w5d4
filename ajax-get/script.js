// https://restcountries.eu/rest/v2/name/{name}

const getDataForCountry = countryName => {
    axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(response => {
            console.log(response.data[0]);
            const countryDetails = response.data[0];

            document.getElementById('country-name').innerText = countryDetails.name;

            document.getElementById('country-population').innerText = countryDetails.population;

            document.getElementById('country-flag').src = countryDetails.flag;
        })
}

document.querySelector('button').onclick = () => {
    const userInput = document.getElementById('name').value;
    getDataForCountry(userInput);
}