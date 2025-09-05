

const homeBox  = document.querySelector(".scores-home");
const guestBox = document.querySelector(".scores-guest");


let homeCount = document.getElementById("score-home")
let guestCount = document.getElementById("score-guest")

function updateBorders() {
  const h = Number(homeCount.textContent);
  const g = Number(guestCount.textContent);

  // remove previous state
  homeBox.classList.remove("lead", "trail", "tie");
  guestBox.classList.remove("lead", "trail", "tie");

  if (h > g) {
    homeBox.classList.add("lead");
    guestBox.classList.add("trail");
  } else if (g > h) {
    guestBox.classList.add("lead");
    homeBox.classList.add("trail");
  } else {
    homeBox.classList.add("tie");
    guestBox.classList.add("tie");
  }
}


function plus1Home()  { homeCount.textContent  = Number(homeCount.textContent)  + 1; updateBorders(); }
function plus2Home()  { homeCount.textContent  = Number(homeCount.textContent)  + 2; updateBorders();  }
function plus3Home()  { homeCount.textContent  = Number(homeCount.textContent)  + 3; updateBorders();  }

function plus1Guest() { guestCount.textContent = Number(guestCount.textContent) + 1; updateBorders();  }
function plus2Guest() { guestCount.textContent = Number(guestCount.textContent) + 2; updateBorders();  }
function plus3Guest() { guestCount.textContent = Number(guestCount.textContent) + 3; updateBorders();  }