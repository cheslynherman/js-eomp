let items = [
    {
        id: 1,
        name: "Demon Slayer Iguro Outfit",
        image: "https://i.postimg.cc/zvH3cP3v/hossein-soltanloo-SCWi1-F9c-VYQ-unsplash.jpg",
        price: 700,
        category: ""
    },
    {
        id: 2,
        name: "Joker Suit",
        image: "https://i.postimg.cc/BvMnmGZ4/daniel-lincoln-EZNEEg-WSV3k-unsplash.jpg",
        price: 860,
        category: ""
    },
    {
        id: 3,
        name: "Pennywise the Clown Costume",
        image: "https://i.postimg.cc/yNZtQmyj/pexels-wilson-vitorino-3230473.jpg",
        price: 950,
        category: ""
    },
];

let itemsDisplay = document.getElementById("product-display");
items.forEach((data) => {
    itemsDisplay.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${data.image}" class="card-img-top img-fluid" alt="${data.name}">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">R ${data.price}</p>
    <a href="#" class="card-btns btn btn-primary">See More</a>
  </div>
</div>
    `
})