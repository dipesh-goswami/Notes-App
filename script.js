const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  inputBox.className = ("input-box");
  inputBox.setAttribute("contenteditable", "true");
  let img = document.createElement("img")
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});
