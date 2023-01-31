"use strict";
snap = document.querySelector(".snap-user");
snap.textContent = document.querySelector(".username").textContent;
const Chat = function (id, snapUser) {
  return `<div data-id="${id}" class="i-chat__div ${typeOfChat}">
  <p class="i-${typeOfChat}-chat">${snapUser}</p>
  <div class="i-chat-msgs i-${typeOfChat}-msgs">
    <p>${mess}</p>

  </div>
</div>`;
};
const chatEdit = function (id) {
  const el = document.querySelectorAll(`[data-id="${id}"]`);
  el.forEach((e) => {
    const parent = e.previousElementSibling;
    if (!parent) return;
    if (parent.classList.contains(typeOfChat)) {
      const child = parent.querySelector(".i-chat-msgs");

      child.insertAdjacentHTML("beforeend", `<p>${mess}</p>`);
      e.parentNode.removeChild(e);
    }
  });
};
const form = document.querySelector(".inp-form");
form.addEventListener("submit", function (e) {
  if (!iChatInput.value) return;

  e.preventDefault();
  id += 1;
  typeOfChat = "my";
  mess = iChatInput.value;
  generic(iChatInput, Chat(id, "ME"), iChatMain);
  chatEdit(id);
});

iRecBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!recInput.value) return;
  id += 1;
  typeOfChat = "rec";
  mess = recInput.value;
  snapUser = snap.textContent.toLocaleUpperCase();
  generic(recInput, Chat(id, snapUser), iChatMain);
  chatEdit(id);
});
