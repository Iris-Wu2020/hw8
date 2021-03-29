/* Homework 8
Exercise 1 JavaScript code
*/
console.log("Wu's Output from Homework 8 Exercise 1");
fetch(
    "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json" 
  )
  .then(response => response.json()) // Access and return response's JSON content 
  .then(paintings => {
      // Iterate on the paintings array
      const tableNode = document.getElementById("paintings");
      paintings.forEach(painting => {
          const tdNode1 = document.createElement("td");
          const tdNode2 = document.createElement("td");
          const tdNode3 = document.createElement("td");
          const trNode = document.createElement("tr");
          tdNode1.textContent = painting.name;
          tdNode2.textContent = painting.year;
          tdNode3.textContent = painting.artist;
          trNode.appendChild(tdNode1);
          trNode.appendChild(tdNode2);
          trNode.appendChild(tdNode3);
          tableNode.appendChild(trNode)
    });
  })
  .catch(err => {
    console.error(err.message);
  });