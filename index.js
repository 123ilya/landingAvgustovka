let button22 = document.querySelector("#scheldule_button_22");
let button23 = document.querySelector("#scheldule_button_23");
let button24 = document.querySelector("#scheldule_button_24");

let scheldule22AG = document.querySelector("#scheldule_22AG");
let scheldule23AG = document.querySelector("#scheldule_23AG");
let scheldule24AG = document.querySelector("#scheldule_24AG");

button22.addEventListener("click", button22Func);
function button22Func() {
  scheldule22AG.classList.add("notdisplay");
  console.log("fff");
}
