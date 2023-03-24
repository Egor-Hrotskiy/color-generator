const hex = document.querySelector("#hex-Btn");
const simple = document.querySelector("#simple-Btn");
const change = document.querySelector("#change-Btn");
const backgrColor = document.querySelector("#color");
const main = document.querySelector("main");
let isHex = false;
generateColor();
const variants = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
console.log(generateHex());

hex.addEventListener("click", () => {
    if (!isHex) {
        simple.classList.remove("clicked");
        hex.classList.add("clicked");
        isHex = true;
    }
})

simple.addEventListener("click", () => {
    if (isHex) {
        hex.classList.remove("clicked");
        simple.classList.add("clicked");
        isHex = false;
    }
})

change.addEventListener("click", generateColor);


function generateHex() {
    const random = function() {
        return Math.floor(Math.random() * 16);
    }
    const genereateVariant = function() {
        return variants[random()];
    }
    return `#${genereateVariant()}${genereateVariant()}${genereateVariant()}${genereateVariant()}${genereateVariant()}${genereateVariant()}`
}

function generateColor() {
    let color;
    if(isHex) {
        color = generateHex();
        
    } else {
        color = generateSimple();
    }
    main.style.backgroundColor = `${color}`;
    change.style.backgroundColor = `${color}`;
    const colorText = document.createElement("span");
    colorText.style.color = `${color}`;
    colorText.textContent = `${color}`;
    backgrColor.textContent = "Background color: "
    backgrColor.append(colorText);
}

function generateSimple() {
    const simpleVariants = ["red", "blue", "white", "yellow", "grey", "#e52165", "#e2d810"]
    return simpleVariants[Math.floor(Math.random() * 7)];
}