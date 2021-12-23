var columnOne = document.querySelector(".col1");
var columnTwo = document.querySelector(".col2");
var columnThree = document.querySelector(".col3");

var isGamesFull = false;
var isCVFull = false;
var isAppsFull = false;

function showGames(){
    if(!isGamesFull){
    isGamesFull = true;
    columnOne.style.width = "66%";
    columnTwo.style.width = "33%";
    columnThree.style.width = "33%";}
    else{
     isGamesFull = false;
    columnOne.style.width = "33.3%";
    columnTwo.style.width = "33.3%";
    columnThree.style.width = "33.3%";   
    }
}

function showCV(){
    if(!isCVFull){
    isCVFull = true;
    columnOne.style.width = "33%";
    columnTwo.style.width = "66%";
    columnThree.style.width = "33%";}
    else{
     isCVFull = false;
    columnOne.style.width = "33.3%";
    columnTwo.style.width = "33.3%";
    columnThree.style.width = "33.3%";   
    }
}

function showApps(){
        if(!isAppsFull){
    isAppsFull = true;
    columnOne.style.width = "33%";
    columnTwo.style.width = "33%";
    columnThree.style.width = "66%";}
else{
     isAppsFull = false;
    columnOne.style.width = "33.3%";
    columnTwo.style.width = "33.3%";
    columnThree.style.width = "33.3%";   
    }
}
