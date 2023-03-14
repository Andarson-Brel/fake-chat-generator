"use strict";
const Chat = function (typeOfChat, mess, id) {
  return ` <div data-id="${id}" class="chat-${typeOfChat}">
  ${typeOfChat === "r" ? `<div class="sp"></div>` : ""}
  <div class="mess mess-${typeOfChat}">
    <p>
     ${mess}
    </p>
  </div>
  ${typeOfChat === "l" ? `<div class="sp"></div>` : ""}
</div>`;
};

const chatFormat = function (id, typeOfChat) {
  const el = document.querySelectorAll(`[data-id="${id}"]`);

  el.forEach((e) => {
    if (e.previousElementSibling) {
      const parent1 = e.previousElementSibling;
      const classType = parent1.classList.value;

      if (classType === `chat-${typeOfChat}`) {
        const child1 = parent1.querySelector(".mess");
        const child2 = e.querySelector(".mess");

        if (typeOfChat === "l") {
          child1.style.borderRadius = " 20px 20px 20px 2px";
        }
        if (typeOfChat === "r") {
          child1.style.borderRadius = " 20px 20px 2px 20px";
        }

        child1.style.marginBottom = "2px";
        child2.style.marginTop = "0";

        if (parent1.previousElementSibling) {
          const classType2 = parent1.previousElementSibling.classList.value;

          if (classType2 === `chat-${typeOfChat}`) {
            if (typeOfChat === "l") {
              child1.style.borderRadius = " 2px 20px 20px 2px";
            }
            if (typeOfChat === "r") {
              child1.style.borderRadius = " 20px 2px 2px 20px";
            }
            child1.style.marginTop = "0";
            child2.style.marginBottom = "2px";
          }
        }
      }
    }
  });
};

const completeChat = function (typeOfChats, chatInput1, chatInput2) {
  if (!chatInput1.value) return;

  id++;
  typeOfChat = typeOfChats;
  mess = chatInput1.value;
  generic(chatInput1, Chat(typeOfChat, mess, id), iChatMain);
  generic(chatInput2, Chat(typeOfChat, mess, id), aChatMain);
  chatFormat(id, typeOfChat);
};

iSend.addEventListener("click", function () {
  addImages(iSend);
  completeChat("r", iChatInput, aChatInput);
});
aSend.addEventListener("click", function () {
  addImages(aSend);
  completeChat("r", aChatInput, iChatInput);
});

if (iRecBtn) {
  iRecBtn.addEventListener("click", function (e) {
    e.preventDefault();
    completeChat("l", recInput, recInput);
  });
}
if (aRecBtn) {
  aRecBtn.addEventListener("click", function (e) {
    e.preventDefault();
    completeChat("l", recInput, recInput);
  });
}
