"use strict";
const snap = document.querySelector(".snap-user");
const snapUser = snap.textContent.toLocaleUpperCase();

const form = document.querySelector(".inp-form");
form.addEventListener("submit", function (e) {
  if (!iChatInput.value) return;
  e.preventDefault();
  const mess = iChatInput.value;
  const chat = ` <div class="i-chat__div">
  <p class="i-my-chat">ME</p>
  <div class="i-chat-msgs i-my-msgs">
    <p>${mess}</p>

  </div>
</div>`;
  generic(iChatInput, chat, iChatBoard);
});

iRecBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!recInput.value) return;
  const mess = recInput.value;
  const chat = `  <div class="i-chat__div">
  <p class="i-rec-chat">${snapUser}</p>
  <div class="i-chat-msgs i-rec-msgs">
    <p>${mess}</p>
   
  </div>
</div>`;

  generic(recInput, chat, iChatBoard);
});
