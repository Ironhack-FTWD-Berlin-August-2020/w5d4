const express = require('express');
const router = express.Router();

const axios = require('axios');


router.get('/', (req, res, next) => {
  // call the star wars api and get a list of people
  axios.get('https://swapi.dev/api/people')
    .then(response => {
      // console.log(response.data.results);
      const people = response.data.results;
      // const names = people.map(person => person.name);
      // console.log(names);
      res.render('index', { people });
    })
    .catch(error => {
      console.log(error);
    })
});

module.exports = router;
