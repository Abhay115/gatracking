
const searchInput=document.getElementById("myInput");
const txt="";

var x = document.getElementById("myInput");
searchInput.addEventListener("search", (event)=>{
    
  console.log(event.target.value);
});

searchInput.addEventListener("input", (event)=>{
    
  console.log(event.target.value);
     ga('send', 'event', 'myInput', input);
});


const button=document.getElementById("btn");

button.addEventListener("click", ()=>{
  
  console.log(x.value);
});

var click=document.getElementById("link2");
click.addEventListener("click",e=>{
  let t=e.target;
  ga('send', {
    hitType:'event',
    eventCategory:'click',
    eventAction: t.href});
}

);




