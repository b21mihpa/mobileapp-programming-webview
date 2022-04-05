const message = document.querySelector("#message");
const messages = document.querySelector("#messages");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(message.value));
  messages.append(listItem);
  message.value = "";
});
