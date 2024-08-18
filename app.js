const input = document.querySelector(".input");
const newGame = document.querySelector(".new");
const info = document.querySelector(".info");

const random = () => {
  return Math.floor(Math.random() * 101);
};

let randomNumber = random();
console.log(randomNumber);
let count = 10;

function control() {
  info.style.display = "block";
  const numberGuess = parseInt(input.value);
  if (isNaN(numberGuess)) {
    info.textContent = `Lutfen sadece sayi girin`;
  } else if (numberGuess < 0 || numberGuess > 100) {
    info.textContent = `Belirtilen aralikta sayi girin`;
  } else {
    count--;
    if (numberGuess === randomNumber) {
      startCelebration();
    } else if (numberGuess < randomNumber) {
      info.textContent = `Daha buyuk bir sayi giriniz. Kalan tahmin hakkiniz ${count}`;
    } else if (numberGuess > randomNumber) {
      info.textContent = `Daha kucuk bir sayi giriniz. Kalan tahmin hakkiniz ${count}`;
    }
  }

  if (count === 0 && numberGuess !== randomNumber) {
    info.textContent = `AGLAAA Dogru sayi: ${randomNumber}`;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "game-over.css";
    document.head.appendChild(link);
  }
  input.value = "";
  input.focus();
}

input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    control();
  }
});

newGame.addEventListener("click", () => {
  randomNumber = random();
  count = 10;
  info.textContent = "";
  info.style.display = "none";
  input.value = "";
  const dynamicCSS = document.querySelector("link[href='game-over.css']");
  if (dynamicCSS) {
    dynamicCSS.parentNode.removeChild(dynamicCSS);
  }
});

window.onload = function () {
  input.focus();
};

// ? ikinci yontem
// window.addEventListener("load", () => {
//   input.focus();
// });
