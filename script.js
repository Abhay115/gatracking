const searchInput=document.getElementById("myInput");
var txt="";

var x = document.getElementById("myInput");
searchInput.addEventListener("search", (event)=>{
    
  console.log(event.target.value);
});

//INPUT TRACKING

searchInput.addEventListener('input', (event)=>{
    txt=event.target.value;
  
  
});


const button=document.getElementById("btn");

button.addEventListener("click", ()=>{
  
  console.log(x.value);
});

//var t=document.getElementById("linkg").addEventListener("click",myfun(this));

function myfun(e){
  console.log(txt);
  var t =e.innerText || e.textContent;
  console.log(t);
  var href = e.getAttribute("href");
   console.log(href);


gtag('event','onclicked'{
    'userInput': txt,
    'linkTitle': t,
    'linkUrl': href
});
 
  


 
 return false;
//console.log(event.hash);
//console.log(event.href);

};
