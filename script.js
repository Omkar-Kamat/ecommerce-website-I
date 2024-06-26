// import mojs from '@mojs/core';
// import anime from 'animejs/lib/anime.es.js';
// import { animate } from "popmotion";

let sectionWomen = document.getElementById("women-tab-sec");
let sectionMen = document.getElementById("men-tab-sec");
let sectionKids = document.getElementById("kids-tab-sec");
let tabWomen = document.getElementById("women-tab");
let tabMen = document.getElementById("men-tab");
let tabKids = document.getElementById("kids-tab");

function womenTab() {
  tabWomen.style.borderBottom = "1.5px solid #696969";
  tabMen.style.borderBottom = "none";
  tabKids.style.borderBottom = "none";

  sectionWomen.style.display = "block";
  sectionMen.style.display = "none";
  sectionKids.style.display = "none";
}
function menTab() {
  tabMen.style.borderBottom = "1.5px solid #696969";
  tabWomen.style.borderBottom = "none";
  tabKids.style.borderBottom = "none";

  sectionMen.style.display = "block";
  sectionWomen.style.display = "none";
  sectionKids.style.display = "none";
}
function kidsTab() {
  tabKids.style.borderBottom = "1.5px solid #696969";
  tabMen.style.borderBottom = "none";
  tabWomen.style.borderBottom = "none";

  sectionKids.style.display = "block";
  sectionMen.style.display = "none";
  sectionWomen.style.display = "none";
}

womenTab();

let bannerOne = document.getElementById("bannerdiv1");
let bannerTwo = document.getElementById("bannerdiv2");


function bannerChange2One(){
  bannerOne.style.display="block";
  bannerTwo.style.display="none";
}
  function bannerChange2Two(){
  bannerOne.style.display="none";
  bannerTwo.style.display="block";
}

bannerChange2One();
setInterval(bannerChange2Two,12000);
setInterval(bannerChange2One,24000);



let searchBox = document.getElementById("search-bar");

function searchBarHide(){
  searchBox.style.display = "none"
}
function searchBarAppear(){
  searchBox.style.display = "block"
}

searchBarHide()


