// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class




const links = document.querySelector(".links")
const navToggle = document.querySelector(".nav-toggle")




navToggle.addEventListener("click", function(){
  // if(links.classList.contains("show-links")){
       //links.classList.remove("show-links")
   //} else {
      // links.classList.add("show-links")
   //}
   links.classList.toggle("show-links")
})

console.clear()