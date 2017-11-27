const fetchAttractions = () =>
  fetch("/api")
    .then(result => result.json())
    .catch(err => console.error(err));

const fetchItineraries = () =>
  fetch("/api/itineraries/1")//WHAT VARIABLE
    .then(result => result.json())
    .catch(err => console.error(err));


module.exports = {
  fetchAttractions,
  fetchItineraries
};
