"use strict";

const Chat = function (typeOfChat, mess) {
  return ` <div class="chat-${typeOfChat}">
  ${typeOfChat === "r" ? `<div class="sp"></div>` : ""}
  <div class="mess mess-${typeOfChat}">
    <p>
     ${mess}
    </p>
  </div>
  ${typeOfChat === "l" ? `<div class="sp"></div>` : ""}
</div>`;
};

iSend.addEventListener("click", function () {
  addImages(iSend);
  if (!iChatInput.value) return;

  typeOfChat = "r";
  mess = iChatInput.value;
  generic(iChatInput, Chat(typeOfChat, mess), iChatMain);
  generic(aChatInput, Chat(typeOfChat, mess), aChatMain);
});
aSend.addEventListener("click", function () {
  addImages(aSend);
  if (!aChatInput.value) return;

  typeOfChat = "r";
  mess = aChatInput.value;
  generic(iChatInput, Chat(typeOfChat, mess), iChatMain);
  generic(aChatInput, Chat(typeOfChat, mess), aChatMain);
});

if (iRecBtn) {
  iRecBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!recInput.value) return;

    typeOfChat = "l";

    mess = recInput.value;
    generic(recInput, Chat(typeOfChat, mess), iChatMain);
    generic(recInput, Chat(typeOfChat, mess), aChatMain);
  });
}
if (aRecBtn) {
  aRecBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!recInput.value) return;

    typeOfChat = "l";

    mess = recInput.value;
    generic(recInput, Chat(typeOfChat, mess), iChatMain);
    generic(recInput, Chat(typeOfChat, mess), aChatMain);
  });
}
