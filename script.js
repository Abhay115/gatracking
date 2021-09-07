const searchInput=document.getElementById("myInput");

var x = document.getElementById("myInput");
searchInput.addEventListener("search", (event)=>{
    
  console.log(event.target.value);
});

searchInput.addEventListener("input", (event)=>{
    let v=event.target.value;
  console.log(v);
     ga('send', 'event', 'myInput', v);
});


const button=document.getElementById("btn");

button.addEventListener("click", ()=>{
  
  console.log(x.value);
});

var click=document.getElementById("link2");
click.addEventListener("click",e=>{
  let t=e.target;
    if ("ga" in window) {
    tracker = ga.getAll()[0];
    if (tracker)
        tracker.send("event", "click", "t.href");

}

});




