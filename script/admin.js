let items = [];
function addtoTable(){

    let outfit = {
      name: document.getElementById("itemName").value,
      image: document.getElementById("itemImg").value,
      price: document.getElementById("itemPrice").value,
      category: document.getElementById("itemCategory").value,
    };
    
    items.push(outfit);
    
    let table = document.getElementById("admin-table");
    table.innerHTML = "";
    items.forEach((data) => {
      table.innerHTML += `
        <tr>
        <td>${data.name}</td>
        <td><img src="${data.image}"></td>
        <td>${data.price}</td>
        <td>${data.category}</td>
        <td></td>
        </tr>
        `;
    });
}
