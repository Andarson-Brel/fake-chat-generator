iSend.addEventListener("click", function () {
  addImages(iSend);

  if (!iChatInput.value) return;
  const mess = iChatInput.value;
  const chat = `  
   <div class="i-my-chat i-chat__bubble">
    <p>
      ${mess}
    </p>
    <span class="sm-fnt i-chat__time">${time()}</span>
    <div class="i-pointy-stuff i-my-pointy-stuff"></div>
   </div>`;
  generic(iChatInput, chat, iChatBoard);
});
aSend.addEventListener("click", function () {
  addImages(aSend);
  if (!aChatInput.value) return;
  const mess = aChatInput.value;
  const chat = ` <div class="a-my-chat a-chat__bubble">
  <p>
    ${mess}
  </p>
  <span class="sm-fnt i-chat__time">${time()}</span>
  <div class="a-pointy-stuff a-my-pointy-stuff"></div>
</div>`;
  generic(aChatInput, chat, aChatBoard);
});

iRecBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!recInput.value) return;
  const mess = recInput.value;
  const chat = `  
   <div class="i-receiver-chat i-chat__bubble">
    <p>
      ${mess}
    </p>
    <span class="sm-fnt i-chat__time">${time()}</span>
    <div class="i-pointy-stuff i-rec-pointy-stuff"></div>
   </div>`;

  generic(recInput, chat, iChatBoard);
});
aRecBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!recInput.value) return;
  const mess = recInput.value;
  const chat = ` <div class="a-receiver-chat a-chat__bubble">
  <p>
    ${mess}
  </p>
  <span class="sm-fnt i-chat__time">${time()}</span>
  <div class="a-pointy-stuff a-rec-pointy-stuff"></div>
</div>`;

  generic(recInput, chat, aChatBoard);
});
