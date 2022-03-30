const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.getElementById("btn")
let color = document.querySelector(".color")

btn.addEventListener("click", function(){
    let newColor = '#'
    for(let i = 0; i < 6; i++){
        newColor += hex[getRandom()]
    }
    document.body.style.backgroundColor = newColor
    color.textContent = newColor
})

function getRandom(){
    return Math.floor(Math.random() * hex.length)
}