let button22 = document.querySelector("#button22");
let button23 = document.querySelector("#button23");
let button24 = document.querySelector("#button24");

button22.addEventListener("click", event22);
function event22() {
  document.querySelector("#scheldule_22AG").classList.remove("displaynone");
  document.querySelector("#scheldule_23AG").classList.add("displaynone");
  document.querySelector("#scheldule_24AG").classList.add("displaynone");
  button22.classList.add("pressed");
  button23.classList.remove("pressed");
  button24.classList.remove("pressed");
  
}

button23.addEventListener("click", event23);
function event23() {
  document.querySelector("#scheldule_22AG").classList.add("displaynone");
  document.querySelector("#scheldule_23AG").classList.remove("displaynone");
  document.querySelector("#scheldule_24AG").classList.add("displaynone");
  button22.classList.remove("pressed");
  button23.classList.add("pressed");
  button24.classList.remove("pressed");
  
}

button24.addEventListener("click", event24);
function event24() {
  document.querySelector("#scheldule_22AG").classList.add("displaynone");
  document.querySelector("#scheldule_23AG").classList.add("displaynone");
  document.querySelector("#scheldule_24AG").classList.remove("displaynone");
  button22.classList.remove("pressed");
  button23.classList.remove("pressed");
  button24.classList.add("pressed");
  
}