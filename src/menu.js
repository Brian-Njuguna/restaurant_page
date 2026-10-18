import fish_rice from "./imgs/rice_fish.jpeg"
import pilau_fish from "./imgs/pilau_fish.jpeg"
import ugali_tilapia from "./imgs/ugali_tilapia.jpeg"
import biryani from "./imgs/Biryani.jpeg"
import chicken_biryani from "./imgs/chicken_biryani.jpeg"
import rice_beef from "./imgs/rice_beef.jpeg"
export default function createMenu(){
    const addContent = document.querySelector("#content");
    addContent.replaceChildren();

    const menu = document.createElement("section");
    menu.classList.add("menu")
    function createMenuCard(name,price,img_source){
        const item_card = document.createElement("div");
        item_card.classList.add("item-card");
        
        
        const img = document.createElement("img");
        img.src = img_source
        const item_info = document.createElement("div");
        item_info.classList.add("item-info");
        const heading = document.createElement("h3");
        heading.classList.add("h3");
        heading.textContent = name;
        const paragraph = document.createElement("p");
        paragraph.textContent = `Ksh ${price}`;
        paragraph.classList.add("p")
        const button = document.createElement("button");
        button.addEventListener("click", function (){
            alert(`Your order details:\n\n` +
                  `• Meal: ${name}\n` +
                  `• Price: KSh ${price}` )

        })
        button.textContent = "Order Now"
        button.classList.add("button")

        item_card.append(img,item_info)
        item_info.append(heading,paragraph, button)

        return item_card;
        
        


    }

    const menu_container = document.createElement("div");
    menu_container.classList.add("menu-container");

    menu_container.append(
    createMenuCard("Fish and Rice", 400, fish_rice),
    createMenuCard("Ugali and Tilapia", 500,ugali_tilapia),
    createMenuCard("Pilau and Fish",700,pilau_fish),
    createMenuCard("Briyani Plani", 150, biryani),
    createMenuCard("Chicken Biryani", 300, chicken_biryani),
    createMenuCard("Rice Beef", 300, rice_beef),
    createMenuCard("Fish and Rice", 400, fish_rice),
    createMenuCard("Ugali and Tilapia", 500,ugali_tilapia),
    createMenuCard("Pilau and Fish",700,pilau_fish),
    createMenuCard("Briyani Plani", 150, biryani),
    createMenuCard("Chicken Biryani", 300, chicken_biryani),
    createMenuCard("Rice Beef", 300, rice_beef),
   

    );
    menu.appendChild(menu_container)
    addContent.appendChild(menu)
    
}