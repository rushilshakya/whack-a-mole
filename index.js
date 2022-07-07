let score = 0;
let myHoles = document.querySelectorAll(".hole");
let myHolesArr = Array.from(myHoles);
let newDiv = document.createElement("div");
let outerDiv = document.querySelector("#whack-a-mole");
newDiv.innerHTML = "hello";

let previousNumber = 0;
myHoles[previousNumber].classList.add("mole");

setInterval(() => {
  myHoles[previousNumber].classList.remove("mole");

  let myRandomNumber = Math.floor(Math.random() * 9);
  myHoles[myRandomNumber].classList.add("mole");
  previousNumber = myRandomNumber;
}, 1000);
// outerDiv.appendChild(newDiv)
// outerDiv.removeChild
