"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Thomas Lowe, Zahriya Carter
   Date:   3/18/2024

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

window.addEventListener("load", setupCart);

function setupCart() {
   let addButtons = document.getElementsByClassName("addButton");
   
   for (let i = 0; i < addButtons.length; i++) {
      addButtons[i].addEventListener("click", addItem);
   }
}

function addItem(e) {
   let foodItem = e.target.nextElementSibling;
   let foodID = foodItem.id;
   let foodDescription = foodItem.cloneNode(true);
   let cartBox = document.getElementById("cart");
   console.log(cartBox);
   let duplicateOrder = false;
   for (let i = 0; i < cartBox.childNodes.length; i++) {
      if (cartBox.childNodes[i].id == foodID) {
         cartBox.childNodes[i].firstChild.textContent = Number(cartBox.childNodes[i].firstChild.textContent) + 1;
         duplicateOrder = true;
         break;
      }
   }
   if (!duplicateOrder) {
      let orderCount = document.createElement("span");
      orderCount.textContent = 1;
      foodDescription.prepend(orderCount);
      cartBox.appendChild(foodDescription);
       }
}