let counterHome = 0;
let counterGuest = 0;
let counterElementHome = document.getElementById("home-counter-el");
let counterElementGuest = document.getElementById("guest-counter-el");
counterElementHome.innerText = counterHome;
counterElementGuest.innerText = counterGuest;
// console.log(counterElement);

function homePlusOne() {
  counterHome += 1;
  counterElementHome.innerText = counterHome;
}

function homePlusTwo() {
  counterHome += 2;
  counterElementHome.innerText = counterHome;
}

function homePlusThree() {
  counterHome += 3;
  counterElementHome.innerText = counterHome;
}

function guestPlusOne() {
  counterGuest += 1;
  counterElementGuest.innerText = counterGuest;
}

function guestPlusTwo() {
  counterGuest += 2;
  counterElementGuest.innerText = counterGuest;
}

function guestPlusThree() {
  counterGuest += 3;
  counterElementGuest.innerText = counterGuest;
}

function reset() {
  counterGuest = 0;
  counterHome = 0;
  counterElementHome.innerText = 0;
  counterElementGuest.innerText = 0;
}
