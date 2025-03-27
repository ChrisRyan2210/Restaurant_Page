
import "./reset.css";
import "./styles.css";
import pizzas from "./pizzas";

const loadPage = () => {
    //header styling 
    const header = document.querySelector("header");
    header.classList.add("header");

    //select the content div outside the loop
    const content = document.querySelector(".content");

    //menu
    pizzas.forEach((pizza) => {
        //create html elements
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu");
        menuItem.setAttribute("id", "menu-item");

        //append pizza properties to div
        const title = document.createElement("h3");
        title.textContent = pizza.name;
        menuItem.appendChild(title);

        const image = document.createElement("img");
        image.src = `./src/images/${pizza.image}`;
        image.alt = pizza.name;
        menuItem.appendChild(image);

        const desc = document.createElement("p");
        desc.textContent = pizza.desc;
        menuItem.appendChild(desc);

        content.appendChild(menuItem);
    });
};

export default loadPage;