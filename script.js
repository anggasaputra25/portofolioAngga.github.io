const body = document.querySelector("body");
const button = document.querySelector("button");
const button2 = document.querySelector("#button");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector("#sidebar");
let loading = document.querySelector(".loading");
var light = 0;
var nilai = 0;

button.addEventListener("click", function(){
    body.classList.toggle("light");
    body.style.transition = "all  0.5s ease";
    navbar.style.transition = "all  0.5s ease";
    if(light == 0){
        button.innerHTML = '<button><i class="fa-solid fa-moon"></i></button>';
        button.style.margin = "0";
        button.style.padding = "0";
        light = 1;
    }
    else{ 
        button.innerHTML = '<button><i class="fa-solid fa-sun"></i></button>';
        light = 0;
    }
});

button2.addEventListener("click", function(){
    body.classList.toggle("light");
    button2.innerHTML = '<button id="button">k</button>';
    body.style.transition = "all  0.5s ease";
    navbar.style.transition = "all  0.5s ease";
    sidebar.style.transition = "all  0.5s ease";
    if(light == 0){
        button2.innerHTML = '<button><i class="fa-solid fa-moon"></i></button>';
        light = 1;
    }
    else{ 
        button2.innerHTML = '<button><i class="fa-solid fa-sun"></i></button>';
        light = 0;
    }
});

menu.addEventListener("click", function(){
    if(nilai == 0){
        sidebar.style.left = "0%";
        sidebar.style.boxShadow = "20px 0px 20px rgba(0, 0, 0, 0.3)";
        sidebar.style.transition = "all ease 1s";
        nilai = 1;
    }
    else{
        sidebar.style.left = "-50%";
        sidebar.style.boxShadow = "0px 0px 0px";
        nilai = 0;
    }
});
window.addEventListener("load", function(){
    loading.style.display = "none";
});