const webElements = {
  countdown: document.getElementById("countdown"),
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  mins: document.getElementById("mins"),
  secs: document.getElementById("secs"),
  ms: document.getElementById("ms"),
  content: document.getElementById("content"),
  before: document.getElementById("before"),
  music: document.getElementById("music"),
  muteButton: document.getElementById("muteButton"),
  musicButton: document.getElementById("musicButton"),
  names: document.getElementById("names"),
};

webElements.musicButton.addEventListener("click", () => {
  pauseMusic();
});

webElements.muteButton.addEventListener("click", () => {
  playMusic();
});

var endDate = new Date("Dec 28, 2022 00:00:00").getTime();

var timer = setInterval(function () {
  let now = new Date().getTime();
  let t = endDate - now;

  if (t >= 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    showDate("days", days);

    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    showDate("hours", hours);

    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    showDate("mins", mins);

    let secs = Math.floor((t % (1000 * 60)) / 1000);
    showDate("secs", secs);

    let ms = Math.floor(t % 1000);
    showDate("ms", ms);
  } else {
    alert("O DIA CHEGOU");
  }
}, 10);

function showDate(alias, data) {
  webElements[alias].innerText = data;
}

window.onload = () => {
  webElements.content.style.display = "none";
};

function showContent() {
  webElements.before.style.display = "none";
  webElements.content.style.display = "flex";
  webElements.names.style.animationName = "blink";
  playMusic();
  nameCicleLoop();
}

function playMusic() {
  webElements.music.play();
  webElements.muteButton.style.display = "none";
  webElements.musicButton.style.display = "block";
}

function pauseMusic() {
  webElements.music.pause();
  webElements.muteButton.style.display = "block";
  webElements.musicButton.style.display = "none";
}

const names = [
  "CJ",
  "PZL",
  "CAROL",
  "ALFREDO",
  "THG",
  "BECCA",
  "AMARAL",
  "KANEDA",
  "VINI",
  "VITÃO",
  "JU",
  "RODRIGO",
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function nameCicleLoop() {
  while (true) {
    for (let name of names) {
      setName(name);
      await sleep(2000);
    }
  }
}

function setName(name) {
  let emoji = '🔥'

  if(name == 'PZL') {
    emoji = '🍁'
  }

  // if(name == 'RODRIGO') {
  //   emoji = '❓'
  // }

  if(name == 'THG') {
    emoji = '💢'
  }

  webElements.names.innerText = `${emoji} ${name} ${emoji}`;
}
