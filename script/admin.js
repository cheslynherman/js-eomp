let items = [];
let admin = JSON.parse(localStorage.getItem("Items")) || [];

function addtoTable() {
  let outfit = {
    name: document.getElementById("itemName").value,
    image: document.getElementById("itemImg").value,
    price: document.getElementById("itemPrice").value,
    category: document.getElementById("itemCategory").value,
  };

  items.push(outfit);

  let table = document.querySelector("tbody");
  localStorage.setItem("Items", JSON.stringify(admin));
  table.innerHTML = "";
  items.forEach((data) => {
    table.innerHTML += `
        <tr class="rows">
        <td>${data.name}</td>
        <td class="img-data"><img src="${data.image}" class="table-img"></td>
        <td>R ${data.price}</td>
        <td>${data.category}</td>
        <td><button id="deleteButton()" class="delBtn btn">Delete</button></td>
        </tr>
        `;
  });
}

function deleteButton() {
  addtoTable() = ""
}
