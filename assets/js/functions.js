"use strict";

document.addEventListener("DOMContentLoaded", init)

function init(){
    document.getElementById("myDropdownBtn").addEventListener("mouseenter", clickDropdown)
    document.getElementById("myDropdown").classList.toggle("show");
    createAccordion();
}

function clickDropdown() {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      } else{
        openDropdown.classList.add('show');
      }
    }
}

function createAccordion(){
    let acc = document.getElementsByClassName("accordion");
    let i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      } 
}