const Chat = function (typeOfPhone, id) {
  return ` <div data-id="${id}" class="${typeOfPhone}-${typeOfChat}-chat ${typeOfPhone}-chat__bubble">
  <p>${mess}</p>
  <span class="sm-ft i-chat__time">${time()}</span>
    <div class="${typeOfPhone}-pointy-stuff ${typeOfPhone}-${typeOfPoint}-pointy-stuff"></div>
</div>`;
};

const pointyStuffEdit = function (id, phone, typeOfChat) {
  const el = document.querySelectorAll(`[data-id="${id}"]`);
  el.forEach((e) => {
    const parent = e.previousElementSibling;
    if (parent?.classList?.contains(`${phone}-${typeOfChat}-chat`)) {
      const child = parent.querySelector(`.${phone}-pointy-stuff`);
      const child2 = parent.querySelector(`.${phone}-chat__time`);
      const child3 = e.querySelector(`.${phone}-chat__time`);

      parent.style.marginTop = "1px";
      parent.style.marginBottom = "1px";
      e.style.marginTop = "1px";
      child3.textContent = child2?.textContent;
      if (phone === "i") {
        child.parentNode.removeChild(child);
      }
    }
  });
};

iSend.addEventListener("click", function () {
  addImages(iSend);

  if (!iChatInput.value) return;
  id += 1;
  typeOfChat = "my";
  typeOfPoint = "my";
  mess = iChatInput.value;
  addToUi(iChatInput);
});

iRecBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!recInput.value) return;
  id += 1;
  typeOfChat = "receiver";
  typeOfPoint = "rec";
  mess = recInput.value;
  addToUi(recInput);
});

aSend.addEventListener("click", function () {
  addImages(aSend);
  if (!aChatInput.value) return;
  id += 1;
  typeOfChat = "my";
  typeOfPoint = "my";
  mess = aChatInput.value;
  addToUi(aChatInput);
});

aRecBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!recInput.value) return;
  id += 1;
  typeOfChat = "receiver";
  typeOfPoint = "rec";
  mess = recInput.value;
  addToUi(recInput);
});
