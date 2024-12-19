import products from "./data.js";

console.log(products);


let product = products;

let container1 = document.getElementById("container");

function create_card(data) {
    data.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.className = "img";
        img.src = product.image;
        img.alt = product.name;

        const title = document.createElement("h3");
        title.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = product.price;

        let button = document.createElement("div");
        button.className = "buttons";

        const btn1 = document.createElement("button");
        btn1.className = "btn";
        btn1.textContent = "Add To Cart";

        const btn2 = document.createElement("button");
        btn2.className = "btn";
        btn2.textContent = "Buy New";

        button.appendChild(btn1);
        button.appendChild(btn2);

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(button);

        container1.appendChild(card);
    });
}

// Call the function
create_card(product);
