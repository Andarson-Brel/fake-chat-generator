let mess;
let typeOfChat,
  typeOfPoint,
  id = 0;

const iphone = "i";
const android = "a";

const Chat = function (typeOfPhone, id) {
  return ` <div data-id="${id}" class="${typeOfPhone}-${typeOfChat}-chat ${typeOfPhone}-chat__bubble">
  <p>
  ${mess}
  </p>
  <span class="sm-fnt i-chat__time">${time()}</span>
  <div class="${typeOfPhone}-pointy-stuff ${typeOfPhone}-${typeOfPoint}-pointy-stuff"></div>
  </div>`;
};

const addToUi = function (chatInput) {
  generic(chatInput, Chat("i", id), iChatBoard);
  generic(chatInput, Chat("a", id), aChatBoard);
};

const pointyStuffEdit = function (id, phone, typeOfChat) {
  const el = document.querySelectorAll(`[data-id="${id}"]`);
  el.forEach((e) => {
    const parent = e.previousElementSibling;
    if (parent?.classList?.contains(`i-${typeOfChat}-chat`)) {
      const child = parent.querySelector(`.${phone}-pointy-stuff`);
      const child2 = parent.querySelector(`.${phone}-chat__time`);
      const child3 = e.querySelector(`.${phone}-chat__time`);
      parent.style.marginTop = "1px";
      parent.style.marginBottom = "1px";
      e.style.marginTop = "1px";
      child3.textContent = child2?.textContent;
      child.parentNode.removeChild(child);
    }
  });
};

if (iSend) {
  iSend.addEventListener("click", function () {
    addImages(iSend);
    if (!iChatInput.value) return;
    id += 1;
    typeOfChat = "my";
    typeOfPoint = "my";
    mess = iChatInput.value;
    addToUi(iChatInput);

    pointyStuffEdit(id, iphone, typeOfChat);
    pointyStuffEdit(id, android, typeOfChat);
  });
}

if (aSend) {
  aSend.addEventListener("click", function () {
    addImages(aSend);
    if (!aChatInput.value) return;
    id += 1;
    typeOfChat = "my";
    typeOfPoint = "my";
    mess = aChatInput.value;

    addToUi(aChatInput);

    pointyStuffEdit(id, iphone, typeOfChat);
    pointyStuffEdit(id, android, typeOfChat);
  });
}

if (iRecBtn) {
  iRecBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!recInput.value) return;
    id += 1;
    typeOfChat = "receiver";
    typeOfPoint = "rec";

    mess = recInput.value;
    addToUi(recInput);

    pointyStuffEdit(id, iphone, typeOfChat);
    pointyStuffEdit(id, android, typeOfChat);
  });
}

if (aRecBtn) {
  aRecBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!recInput.value) return;
    id += 1;
    typeOfChat = "receiver";
    typeOfPoint = "rec";
    mess = recInput.value;
    addToUi(recInput);

    pointyStuffEdit(id, iphone, typeOfChat);
    pointyStuffEdit(id, android, typeOfChat);
  });
}
