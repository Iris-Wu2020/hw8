/* Homework 8
Exercise 4 JavaScript code
*/
console.log("Wu's Output from Homework 8 Exercise 4");


document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "<label>Form Data Entered</label>"
    const tableElement = document.createElement("table");
    tableElement.classList = "user";
    const trElement1 = document.createElement("tr");
    trElement1.innerHTML = "<th> Key </th><th> Value </th>"
    resultElement.appendChild(tableElement).appendChild(trElement1);

    for (let pair of formData.entries()) {
        console.log(pair[0] + ',' + pair[1]);
        const trElement = document.createElement("tr");
        const tdElement1 = document.createElement("td");
        const tdElement2 = document.createElement("td");
        tdElement1.textContent = pair[0];
        tdElement2.textContent = pair[1];
        trElement.appendChild(tdElement1);
        trElement.appendChild(tdElement2);
        tableElement.appendChild(trElement);

    }

    
})


