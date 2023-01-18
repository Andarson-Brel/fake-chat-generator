let mess;
let typeOfChat, typeOfPoint;

const Chat = function (typeOfPhone) {
  return ` <div class="${typeOfPhone}-${typeOfChat}-chat ${typeOfPhone}-chat__bubble">
  <p>
  ${mess}
  </p>
  <span class="sm-fnt i-chat__time">${time()}</span>
  <div class="${typeOfPhone}-pointy-stuff ${typeOfPhone}-${typeOfPoint}-pointy-stuff"></div>
  </div>`;
};
const addToUi = function (chatInput) {
  generic(chatInput, Chat("i"), iChatBoard);
  generic(chatInput, Chat("a"), aChatBoard);
};

if (iSend) {
  iSend.addEventListener("click", function () {
    addImages(iSend);
    if (!iChatInput.value) return;
    typeOfChat = "my";
    typeOfPoint = "my";
    mess = iChatInput.value;

    addToUi(iChatInput);
  });
}

if (aSend) {
  aSend.addEventListener("click", function () {
    addImages(aSend);
    if (!aChatInput.value) return;
    typeOfChat = "my";
    typeOfPoint = "my";
    mess = aChatInput.value;

    addToUi(aChatInput);
  });
}

if (iRecBtn) {
  iRecBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!recInput.value) return;
    typeOfChat = "receiver";
    typeOfPoint = "rec";

    mess = recInput.value;
    addToUi(recInput);
  });
}

if (aRecBtn) {
  aRecBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!recInput.value) return;
    typeOfChat = "receiver";
    typeOfPoint = "rec";
    mess = recInput.value;
    addToUi(recInput);
  });
}
