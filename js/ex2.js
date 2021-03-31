/* Homework 8
Exercise 2 JavaScript code
*/
console.log("Wu's Output from Homework 8 Exercise 2");

const lookupInformation = (userName) => {
    if (userName === undefined || userName === "") {return;}
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(users => {
          // Access some user properties
          const userNameGet = users.name;
          const userBlog = users.blog;
          const userCreateTime = users.created_at;
          const userImage = users.avatar_url;

          //Create DOM elements for properties
          const imageElement = document.createElement("img");
          imageElement.src = userImage;
          const userElement = document.getElementById("users");
          userElement.appendChild(imageElement);
          
          const tableElement = document.getElementById("information");
          const trElement1 = document.createElement("tr");
          const tdElement1 = document.createElement("td");
          const tdElement2 = document.createElement("td");
          tdElement1.textContent = "Name";
          tdElement2.textContent = userNameGet
          trElement1.appendChild(tdElement1);
          trElement1.appendChild(tdElement2);
          
          const trElement2 = document.createElement("tr");
          const tdElement3 = document.createElement("td");
          const tdElement4 = document.createElement("td");
          tdElement3.textContent = "Blog";
          tdElement4.textContent = userBlog;
          trElement2.appendChild(tdElement3);
          trElement2.appendChild(tdElement4);
          
          const trElement3 = document.createElement("tr");
          const tdElement5 = document.createElement("td");
          const tdElement6 = document.createElement("td");
          tdElement5.textContent = "Created";
          tdElement6.textContent = userCreateTime;
          trElement3.appendChild(tdElement5);
          trElement3.appendChild(tdElement6);

          tableElement.appendChild(trElement1);
          tableElement.appendChild(trElement2);
          tableElement.appendChild(trElement3);

      })
    
      .catch(err => {
          console.error(err.message);
      })
}

const button = document.getElementById("lookupButton");
button.addEventListener('click', function() {
    const username = document.getElementById("userInput").value;
    lookupInformation(username);
});



// document.getElementById("lookupButton").addEventListener("click", e => {
//     lookupInformation(inputValue);
// });