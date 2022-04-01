let count = 0;

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn") // this is basically an object node list of the buttons, made because they all contain the same class, and becasue we are using querySelectorAll to group them with their classs

btns.forEach(function (btn){ //forEach means that someonthing will be done with each item of the array btns[]
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--
        } else if( styles.contains("increase")){
            count++
        } else {
            count = 0
        }
        if(count > 0){
            value.style.color = "green"
        }
        if( count < 0 ){
            value.style.color = "red"
        }
        if ( count === 0){
            value.style.color = "#222"
        }
        value.textContent = count
    })
})


let count = 0
const value = document.querySelector("#value")
const buttons = document.querySelectorAll(".btn")

buttons.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const style = e.currentTarget.classList
        
    })

})
console.log(buttons)
