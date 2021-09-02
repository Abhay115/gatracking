
const searchInput=document.getElementById("myInput");
const txt="";

var x = document.getElementById("myInput");
searchInput.addEventListener("search", (event)=>{
    
  console.log(event.target.value);
});

searchInput.addEventListener("input", (event)=>{
    
  console.log(event.target.value);
});


const button=document.getElementById("btn");

button.addEventListener("click", ()=>{
  
  console.log(x.value);
});




