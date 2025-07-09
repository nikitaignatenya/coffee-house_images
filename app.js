const arrItems = [
  {
    type: "coffee",
    svg: "./svg/box.png",
    name: "Irish coffee",
    description:
      "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    price: "$7.00",
    class: "container",
  },
  {
    type: "coffee",
    svg: "./svg/box_2.png",
    name: "Kahlua coffee",
    description:
      "Classic coffee with mil k and Kahlua liqueur under a cap of frothed milk",
    price: "$7.00",
    class: "container",
  },
  {
    type: "coffee",
    svg: "./svg/box_3.png",
    name: "Honey raf",
    description: "Espresso with frothed milk, cream and aromatic honey",
    price: "$5.50",
    class: "container",
  },
  {
    type: "coffee",
    svg: "./svg/box_4.png",
    name: "Ice cappuccino",
    description: "Cappuccino with soft thick foam in summer version with ice",
    price: "$5.00",
    class: "container",
  },
  {
    type: "coffee",
    svg: "./svg/box_5.png",
    name: "Espresso",
    description: "Classic black coffee",
    price: "$4.50",
    class: "container cofee_remove_1089",
  },
  {
    type: "coffee",
    svg: "./svg/box_6.png",
    name: "Latte",
    description:
      "Espresso coffee with the addition of steamed milk and dense milk foam",
    price: "$5.50",
    class: "container cofee_remove_1089",
  },
  {
    type: "coffee",
    svg: "./svg/box_7.png",
    name: "Latte macchiato",
    description: "Espresso with frothed milk and chocolate",
    price: "$5.50",
    class: "container cofee_remove_1439",
  },
  {
    type: "coffee",
    svg: "./svg/box_8.png",
    name: "Coffee with cognac",
    description: "Fragrant black coffee with cognac and whipped cream",
    price: "$6.50",
    class: "container cofee_remove_1439",
  },
  {
    type: "tea",
    svg: "./svg/tea_1.png",
    name: "Moroccan",
    description:
      "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    price: "$4.50",
    class: "container",
  },
  {
    type: "tea",
    svg: "./svg/tea_2.png",
    name: "Ginger",
    description: "Original black tea with fresh ginger, lemon and honey",
    price: "$5.00",
    class: "container",
  },
  {
    type: "tea",
    svg: "./svg/tea_3.png",
    name: "Cranberry",
    description: "Invigorating black tea with cranberry and honey",
    price: "$5.00",
    class: "container",
  },
  {
    type: "tea",
    svg: "./svg/tea_4.png",
    name: "Sea buckthorn",
    description:
      "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    price: "$5.50",
    class: "container",
  },
  {
    type: "dessert",
    svg: "./svg/des_1.png",
    name: "Marble cheesecake",
    description:
      "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    price: "$3.50",
    class: "container",
  },
  {
    type: "dessert",
    svg: "./svg/des_2.png",
    name: "Red velvet",
    description: "Layer cake with cream cheese frosting",
    price: "$4.00",
    class: "container",
  },
  {
    type: "dessert",
    svg: "./svg/des_3.png",
    name: "Cheesecakes",
    description:
      "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    price: "$4.50",
    class: "container",
  },
  {
    type: "dessert",
    svg: "./svg/des_4.png",
    name: "Creme brulee",
    description:
      "Delicate creamy dessert in a caramel basket with wild berries",
    price: "$4.00",
    class: "container",
  },
  {
    type: "dessert",
    svg: "./svg/des_5.png",
    name: "Pancakes",
    description: "Tender pancakes with strawberry jam and fresh strawberries",
    price: "$4.50",
    class: "container cofee_remove_1089",
  },
  {
    type: "dessert",
    svg: "./svg/des_6.png",
    name: "Honey cake",
    description: "Classic honey cake with delicate custardv",
    price: "$4.50",
    class: "container cofee_remove_1089",
  },
  {
    type: "dessert",
    svg: "./svg/des_7.png",
    name: "Chocolate cake",
    description: "Cake with hot chocolate filling and nuts with dried apricots",
    price: "$5.50",
    class: "container cofee_remove_1439",
  },
  {
    type: "dessert",
    svg: "./svg/des_8.png",
    name: "Black forest",
    description:
      "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    price: "$6.50",
    class: "container cofee_remove_1439",
  },
];

const coffeeButton = document.getElementById("coffee");
const teaButton = document.getElementById("tea");
const dessertButton = document.getElementById("dessert");
const containerDrink = document.querySelector(".containerDrink");
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");

modal.className = "modal";

function doChange(pr) {
  containerDrink.innerHTML = "";
  arrItems
    .filter((el) => (el.type.includes(pr) ? true : false))
    .forEach((el) => {
      const container = document.createElement("div");
      container.className = `${el.class}`;
      containerDrink.appendChild(container);
      container.innerHTML += `<img class="image_1" src='${el.svg}'/><div class="text_first_six"><p>${el.name}</p><p>${el.description}</p><p>${el.price}</p></div>`;
      container.addEventListener("click", () => {
        modal.style.display = "flex";
        modal.innerHTML = `<img src="${el.svg}" class="modalImage"/><div class="modalChoose"><h3>${el.name}</h3><p class="description">Fragrant black coffee with Jameson Irish whiskey and whipped milk</p><p class="sizeName">Size</p><div class="size"><div class="size_type"><p>S</p><p>200 ml</p></div><div class="size_type"><p>M</p><p>300 ml</p></div><div class="size_type"><p>L</p><p>400 ml</p></div></div><p class="additivesName">Additives</p><div class="additives"><div class="additives_type"><p>1</p><p>Sugar</p></div><div class="additives_type"><p>2</p><p>Cinnamon</p></div><div class="additives_type"><p>3</p><p>Syrup</p></div></div><div class="totalPrice"><h2>Total:</h2><h2>$7.00</h2></div><div class="info-empty"><img src="./svg/info-empty.svg" alt="" /><p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p></div><button class="close">Close</button></div>`;
        const close = document.querySelector(".close");
        close.addEventListener("click", () => (modal.style.display = "none"));
      });
    });
}

coffeeButton.addEventListener("click", () => doChange("coffee"));
teaButton.addEventListener("click", () => doChange("tea"));
dessertButton.addEventListener("click", () => doChange("dessert"));
