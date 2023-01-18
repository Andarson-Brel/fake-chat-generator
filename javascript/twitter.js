const chatBox = document.querySelectorAll(".chatbox");

inputClear(iChatInput, chatBox);
iSend.addEventListener("click", function (e) {
  if (!iChatInput.value) return;
  e.preventDefault();
  const mess = iChatInput.value;
  const chat = `      <div class="chat-r">
  <div class="sp"></div>
  <div class="mess mess-r">
    <p>
      ${mess}
    </p>
    <p class="message-time-r">${time()}</p>
  </div>
</div>`;
  generic(iChatInput, chat, chatBox);
});
