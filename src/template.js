export default function createHeader() {
    const content = document.querySelector("#head");
    const heading = document.createElement("h2");
    heading.textContent = "WELCOME";
    heading.classList.add("main-heading");

    content.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Home of Fish and Fries";
    paragraph.classList.add("welcome-paragraph")
    content.appendChild(paragraph)
}
