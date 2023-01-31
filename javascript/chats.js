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
const iChatMain = document.querySelectorAll(".i-chat-main");
const aChatMain = document.querySelectorAll(".a-chat-main");
const chatBox = document.querySelectorAll(".chatbox");

const recBtns = [iRecBtn, aRecBtn];
const chatMains = [iChatMain, aChatMain];
let mess;
let typeOfChat,
  typeOfPoint,
  id = 0;

const iphone = "i";
const android = "a";
let snap, snapUser;

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
const generic = function (type, chat, chatBoard) {
  chatBoard.forEach((chats) => chats.insertAdjacentHTML("beforeend", chat));
  if (date) date.setMinutes(date.getMinutes() + Math.floor(Math.random() * 2));
  type.value = "";
};
const inputClear = function (input, board, send) {
  if (input) {
    input.addEventListener("input", function () {
      (function () {
        board.forEach((chat) => (chat.innerHTML = ""));
      })();

      inputImg.forEach((img) => img.style.setProperty("--shw", "none"));
      if (send) send.style.setProperty("--none", "inline-block");

      if (chatBox) {
        let count = 0;
        chatBox.forEach((ch) => {
          ch.style.height = 0;
          chatMains[count].forEach((cm) => (cm.style.height = "75%"));
          count += 1;
          // console.log(chatMains);
        });
      }
    });
  }
};
// console.log(chatBox);
const clearedChatboxes = function () {
  inputClear(iChatInput, iChatBoard, iSend);
  inputClear(aChatInput, aChatBoard, aSend);
  inputClear(aChatInput, iChatBoard);
  inputClear(iChatInput, aChatBoard);
  inputClear(recInput, iChatBoard);
  inputClear(recInput, aChatBoard);
};

clearedChatboxes();

const addToUi = function (chatInput) {
  if (iChatInput) {
    generic(chatInput, Chat(iphone, id), iChatMain);
  }
  if (aChatInput) {
    generic(chatInput, Chat(android, id), aChatMain);
  }
};
