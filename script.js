"use strict";

// need features - local Storage, ctrl-z for deletion, arhcived section which is also stored in local storage, subjects each having own list

const btnform = document.querySelector(".btnform");
const item = document.querySelector("#item");
const listItems = document.querySelector(".list-items");
const arrDivs = [];
const arrBtns = [];

const removeItem = function () {
  document.getElementById(`${parseInt(this.id)}-Divs`).remove();
};

const addItem = function (e) {
  e.preventDefault();
  const content = item.value;
  if (arrDivs.length === 0) {
    const html = `<div class="DIV" id="0-Divs"><button class="btnRemove" id="0-btn">❌</button>
    <li class="actual-list-item">${content}</li></div>`;
    listItems.insertAdjacentHTML("beforeend", html);
    arrBtns.push(0);
    arrDivs.push(0);
    document.getElementById("0-btn").addEventListener("click", removeItem);
  } else {
    const html = `<div class="DIV" id="${arrDivs.length}-Divs"><button class="btnRemove" id ="${arrBtns.length}-btn">❌</button>
  <li class="actual-list-item">${content}</li></div>`;
    listItems.insertAdjacentHTML("beforeend", html);
    document
      .getElementById(`${arrDivs.length}-btn`)
      .addEventListener("click", removeItem);
    arrBtns.push(arrBtns.length);
    arrDivs.push(arrDivs.length);
  }
};

btnform.addEventListener("click", addItem);
