"use strict"

window.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector("button");
  let lamp = document.querySelector(".span1");
  let cls = document.querySelector(".cls");

  btn.addEventListener("click", () => {
   
    if(lamp.classList.contains("show")) {
      lamp.classList.remove("show");
      lamp.classList.add("hide");
    }else {
      lamp.classList.remove("hide");
      lamp.classList.add("show");
    }
  })
  
})