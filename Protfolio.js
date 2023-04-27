const btn1 = document.querySelector("#menu-icon");
const btn2 = document.querySelector('.nav-links');
btn1.addEventListener('click', () =>{
    //alert("working")
    btn1 .classList.toggle("bx-x");
    btn2.classList.toggle("slide");
});
//console.log("hiiiiiiii");
//console.log(document.getElementById("menu-icon"));
//const array = document.querySelectorAll(".link");
//array.forEach(element=>{
  //  console.log(element);
//});

