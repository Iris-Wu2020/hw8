/* Homework 8
Exercise 3 JavaScript code
*/
console.log("Wu's Output from Homework 8 Exercise 3");

const travelInformation = {
        name: "Iris",
        countries: [
            {
                name: "UK",
                year: 2017
            },
            {
                name: "USA",
                year: 2019
            }
        ]
};

fetch(" https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(travelInformation)
})
  .then(response => response.text())
  .then(result => {
      console.log(result);
  })
  .catch(err =>{
      console.error(err.message);
  });
