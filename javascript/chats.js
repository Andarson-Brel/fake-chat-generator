"use strict";
const iChatInput = document.querySelector(".i-inp");
const aChatInput = document.querySelector(".a-inp");
const recInput = document.getElementById("message-input");
const iRecBtn = document.querySelector(".i-rec-btn");
const aRecBtn = document.querySelector(".a-rec-btn");

const inputImg = document.querySelectorAll(".inp-img");
const iSend = document.querySelector(".i-send-btn");
const aSend = document.querySelector(".a-send-btn");
const iChatBoard = document.querySelectorAll(".i-chat");
const aChatBoard = document.querySelectorAll(".a-chat");
const recBtns = [iRecBtn, aRecBtn];

let date = new Date();
let difference = date.getMinutes() - 100;

date.setMinutes(difference);
const time = function () {
  return `${date.getHours()}:${date.getMinutes()}`;
};

const addImages = function (send) {
  inputImg.forEach((img) => img.style.setProperty("--shw", "inline-block"));
  if (send) send.style.setProperty("--none", "none");
};

const inputClear = function (input, board, send) {
  if (input)
    input.addEventListener("input", function () {
      (function () {
        board.forEach((chat) => (chat.innerHTML = ""));
      })();

      inputImg.forEach((img) => img.style.setProperty("--shw", "none"));
      if (send) send.style.setProperty("--none", "inline-block");
    });
};

const clearedChatboxes = function () {
  inputClear(iChatInput, iChatBoard, iSend);
  inputClear(aChatInput, aChatBoard, aSend);
  inputClear(aChatInput, iChatBoard);
  inputClear(iChatInput, aChatBoard);
  inputClear(recInput, iChatBoard);
  inputClear(recInput, aChatBoard);
};

clearedChatboxes();

const generic = function (type, chat, chatBoard) {
  chatBoard.forEach((chats) => chats.insertAdjacentHTML("beforebegin", chat));
  date.setMinutes(date.getMinutes() + Math.floor(Math.random() * 2));
  type.value = "";
};
