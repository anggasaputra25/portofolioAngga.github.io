let me = document.querySelector("#me");
let team = document.querySelector("#team");
let wordAngga = document.querySelector(".wordAngga");
let wordTeam = document.querySelector(".wordTeam");
let body = document.querySelector("body");
let sun = document.querySelector("#sun")
let kirim = document.querySelector("#kirim");
let circle = document.querySelector("#circle");
let nilai = 0;
let nilai2 = 0;

me.addEventListener("click", function(){
    if(nilai == 0){
        wordAngga.style.animation = "forwards 3s wordAngga";
        nilai = 1;
    }
    else{
        wordAngga.style.animation = "forwards 3s wordAngga2";
        nilai = 0;
    }
});
team.addEventListener("click", function(){
    if(nilai2 == 0){
        wordTeam.style.animation = "forwards 3s wordTeam";
        nilai2 = 1;
    }
    else{
        wordTeam.style.animation = "forwards 3s wordTeam2";
        nilai2 = 0;
    }
});
sun.addEventListener("click", function(){
    body.classList.toggle("light");
    if(body.classList.contains("light")){
        circle.style.animation = "forwards 2s animasiLight";
    }
    else{
        circle.style.animation = "forwards 2s animasiLightRev";
    }
});
kirim.addEventListener("click", function(){
    alert("Pesan tidak dapat terkirim dikarenakan web ini belum mendukung fitur tersebut")
});


// menuBar
let menu = document.querySelector(".menu");
let line1 = document.querySelector(".line1");
let line3 = document.querySelector(".line3");
let sidebar = document.querySelector("#sidebar");
let line = 0;

menu.addEventListener("click", function(){
    if(line == 0){
        line1.style.animation = "forwards line1 1s";
        line3.style.animation = "forwards line3 1s";
        sidebar.style.left = "0";
        line = 1;
    }
    else{
        line1.style.animation = "forwards line1rev 1s";
        line3.style.animation = "forwards line3rev 1s";
        sidebar.style.left = "-60%";
        line = 0;
    }
});