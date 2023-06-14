const items = [
  {
    id: 1,
    name: "Demon Slayer Iguro Outfit",
    image:
      "https://i.postimg.cc/zvH3cP3v/hossein-soltanloo-SCWi1-F9c-VYQ-unsplash.jpg",
    price: 2000,
    category: "Anime",
    quantity: 5,
  },
  {
    id: 2,
    name: "High Rise Invasion Sniper Mask Costume",
    image: "https://i.postimg.cc/D04y7h4C/pexels-franco-monsalvo-13123969.jpg",
    price: 1700,
    category: "Anime",
    quantity: 3,
  },
  {
    id: 3,
    name: "Spy x Family Anya Outfit",
    image: "https://i.postimg.cc/rsV39NM5/pexels-quyn-ph-m-12551775.jpg",
    price: 2070,
    category: "Anime",
    quantity: 10,
  },
  {
    id: 4,
    name: "Joker Suit",
    image:
      "https://i.postimg.cc/BvMnmGZ4/daniel-lincoln-EZNEEg-WSV3k-unsplash.jpg",
    price: 2860,
    category: "Heroes and Villains",
    quantity: 5,
  },
  {
    id: 5,
    name: "Pennywise the Clown Costume",
    image: "https://i.postimg.cc/yNZtQmyj/pexels-wilson-vitorino-3230473.jpg",
    price: 2120,
    category: "Horror",
    quantity: 5,
  },
  {
    id: 6,
    name: "Female Freddy Kruger Outfit",
    image:
      "https://i.postimg.cc/HWbb01h0/nice-m-nshuti-cx-IFu-B7m-Mi-Q-unsplash.jpg",
    price: 1550,
    category: "Horror",
    quantity: 2,
  },
  {
    id: 7,
    name: "Iron Man Suit",
    image:
      "https://i.postimg.cc/qvGT2qsf/igor-bumba-rkaah-In-Fl-Bg-unsplash.jpg",
    price: 5700,
    category: "Heroes and Villains",
    quantity: 1,
  },
  {
    id: 8,
    name: "Chucky Doll Outfit",
    image: "https://i.postimg.cc/yxFV5PZx/pexels-lee-chinyama-9703546.jpg",
    price: 2100,
    category: "Horror",
    quantity: 4,
  },
  {
    id: 9,
    name: "Captain America Outfit",
    image: "https://i.postimg.cc/3JSjNCqz/pexels-duren-williams-10682514.jpg",
    price: 3700,
    category: "Heroes and Villains",
    quantity: 5,
  },
  {
    id: 10,
    name: "Kids Spiderman Costume",
    image: "https://i.postimg.cc/cC6zt4sS/mali-desha-3-CYtacvht-M-unsplash.jpg",
    price: 1400,
    category: "Heroes and Villains",
    quantity: 7,
  },
  {
    id: 11,
    name: "Aquaman Costume and Trident",
    image: "https://i.postimg.cc/mkw6nz8C/lance-reis-YZJp-LKQYvm8-unsplash.jpg",
    price: 2930,
    category: "Heroes and Villains",
    quantity: 2,
  },
];

function displayItems(item) {
  const myItems = document.getElementById("items");
  myItems.innerHTML= "";
  items.forEach((data) => {
    const itemsElement = document.createElement("div");
    itemsElement.innerHTML += `
        <div class="card" style="width: 18rem;">
  <img src="${data.image}" class="card-img-top img-fluid" alt="${data.name}">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">R ${data.price}</p>
    <button onclick="pushToCart(${data.id})" class="add-button btn">Add To Cart</button>
  </div>
</div>
        `;
    myItems.appendChild(itemsElement);
  });
}
displayItems();

let cart = JSON.parse(localStorage.getItem("Item")) || [];

function pushToCart(itemID) {
  let item = items.find((item) => item.id === itemID);
  if (item && item.quantity > 0) {
    cart.push(item);
    item.quantity--;
    updateToCart();
  }
}

function deleteFromCart(index) {
  let deleteItem = cart.splice(index, 1)[0];
  deleteItem.quantity++;
  updateToCart();
}

function updateToCart() {
  const cartContent = document.getElementById("cart-text");
  localStorage.setItem("Item", JSON.stringify(cart));
  cartContent.innerHTML = "";
  cart.forEach((item, index) => {
    const cartItems = document.createElement("div");
    cartItems.innerHTML += `
        <p>${item.name}</p>
        <p>R ${item.price}</p>
        <button onclick="deleteFromCart(${index})" class="delete btn">delete</button>
        `;
    cartContent.appendChild(cartItems);
  });
  amount();
}

updateToCart();

function amount() {
  let totalElement = document.getElementById("total");
  let total = 0;
  cart.forEach((item) => {
    total += eval(item.price);
  });
  totalElement.textContent = `Total: R ${total}`;
}

function checkout() {
  let modalFooter = document.querySelector(".modal-footer");
  modalFooter.innerHTML = `
    <p class="message">Your payment has been received!</p>
    `;
  cart = [];
  updateToCart();
}

// function all() {

// }

// function animeBtn () {

// }

// function horrorBtn ()
// {

// }

// function heroBtn() {

// }

const showBtn = document.getElementById("allBtn");
showBtn.addEventListener("click", all)

const animeBtn = document.getElementById("animeBtn")
animeBtn.addEventListener("click", animeBtn)

const horrorBtn = document.getElementById ("horrorBtn")
horrorBtn.addEventListener("click", horrorBtn)

const heroBtn = document.getElementById ("heroBtn")
horrorBtn.addEventListener("click", heroBtn)
