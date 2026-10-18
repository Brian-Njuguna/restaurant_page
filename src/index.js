import "./styles.css";
import "./menu_styles.css"
import createHeader from "./template";
import createHome from "./home";
import createMenu from "./menu";

import createFooter from "./footer";
import createAbout from "./about";
createHome()
const home = document.querySelector("#home")
home.addEventListener("click", () =>{
    createHome();
})

const menu = document.querySelector("#menu")
menu.addEventListener("click",() =>{
    createMenu()
})
const about = document.querySelector("#about")
about.addEventListener("click",() =>{
    createAbout()
})
createHeader()
createFooter()

console.log("Welcome")