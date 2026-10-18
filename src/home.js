import image1 from "./imgs/image1.jpeg";
import image2 from "./imgs/image2.jpeg";
import image3 from "./imgs/image3.jpeg";
import image4 from "./imgs/image4.jpeg";
import image5 from "./imgs/image5.jpeg";
import image6 from "./imgs/image6.jpeg";

const img = [image1,image2,image3,image4,image5,image6];
export default function createHome(){

    const addContent = document.querySelector("#content");
    addContent.replaceChildren();
    img.forEach((imageSrc) =>{
        const images  = document.createElement("img");
        images.src = imageSrc;
        images.classList.add("images")

        addContent.appendChild(images)

    });
    

}