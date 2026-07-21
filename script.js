const home = document.getElementById("home");
const blog = document.getElementById("blog");
const site = document.getElementById("site");
const projectsModal = document.getElementById("projectsModal");
const projectsClose = document.getElementById("projectsClose");
const todoModal = document.getElementById("todoModal");
const todoClose = document.getElementById("todoClose");
const todoButton = document.getElementById("todo");

const literature = document.getElementById("literature");
const literatureModal = document.getElementById("literatureModal");
const literatureClose = document.getElementById("literatureClose");
const introModal = document.getElementById("introModal");
const introOk = document.getElementById("introOk");
const backBtn = document.getElementById("backBtn");
const poem = document.getElementById("poem");
const poemsPanel = document.getElementById("poemsPanel");
const poemBackBtn = document.getElementById("poemBackBtn");
const root = document.documentElement;

const SCENE_WIDTH = 1600;
const SCENE_HEIGHT = 900;

function syncSceneScale() {
  const scale = Math.min(
    window.innerWidth / SCENE_WIDTH,
    window.innerHeight / SCENE_HEIGHT
  );

  root.style.setProperty("--scene-scale", Math.max(scale, 0.35).toFixed(4));
}

syncSceneScale();
window.addEventListener("resize", syncSceneScale);

// Home → Blog
literature.addEventListener("click", () => {
  // open literature modal (uses same UI.png modal-card)
  if (literatureModal) {
    literatureModal.classList.add("active");
    home.classList.add("hidden");
  } else {
    home.classList.add("hidden");
    blog.classList.add("active");
  }
});

if (literatureClose) {
  literatureClose.addEventListener("click", () => {
    literatureModal.classList.remove("active");
    home.classList.remove("hidden");
  });
}

// Show intro modal on page load
window.addEventListener("load", () => {
  if (introModal) {
    introModal.classList.add("active");
    home.classList.add("hidden");
  }
});

if (introOk) {
  introOk.addEventListener("click", () => {
    introModal.classList.remove("active");
    home.classList.remove("hidden");
  });
}

// intro modal has only the OK button for dismissal

// `poem` element is now non-interactive — no click handler attached.

// Site → Projects modal
site.addEventListener("click", () => {
  projectsModal.classList.add("active");
  home.classList.add("hidden");
});

projectsClose.addEventListener("click", () => {
  projectsModal.classList.remove("active");
  home.classList.remove("hidden");
});

todoButton.addEventListener("click", () => {
  todoModal.classList.add("active");
  home.classList.add("hidden");
});

todoClose.addEventListener("click", () => {
  todoModal.classList.remove("active");
  home.classList.remove("hidden");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (projectsModal.classList.contains("active")) {
      projectsModal.classList.remove("active");
      home.classList.remove("hidden");
    }
    if (todoModal.classList.contains("active")) {
      todoModal.classList.remove("active");
      home.classList.remove("hidden");
    }
    if (literatureModal && literatureModal.classList.contains("active")) {
      literatureModal.classList.remove("active");
      home.classList.remove("hidden");
    }
    if (introModal && introModal.classList.contains("active")) {
      introModal.classList.remove("active");
      home.classList.remove("hidden");
    }
  }
});

const musicButton = document.getElementById("music");
const musicIndicator = document.getElementById("musicIndicator");
const musicIcons = document.getElementById("musicIcons");
const trackFiles = [
  "assets/While My Guitar Gently Weeps.mp3",
  "assets/Heart To Heart.mp3",
  "assets/DShozier.mp3",
  "assets/GOFLB.mp3"
  
];
const trackLabels = [
  "Beatles",
  "Heart To Heart",
  "De Selby Pt.2",
  "Queen"
];
let musicState = 0;
let musicPlayer = new Audio();
musicPlayer.volume = 0.55;
let indicatorTimeout = null;

function showMusicIndicator(message) {
  musicIndicator.textContent = message;
  musicIndicator.classList.add("active");

  clearTimeout(indicatorTimeout);
  indicatorTimeout = setTimeout(() => {
    musicIndicator.classList.remove("active");
  }, 2200);
}

function updateMusicState() {
  if (!musicPlayer.paused) {
    musicPlayer.pause();
  }

  if (musicState === 0) {
    musicPlayer.src = "";
    musicPlayer.currentTime = 0;
    musicButton.classList.remove("active");
    showMusicIndicator("Music stopped");
    return;
  }

  musicPlayer.src = trackFiles[musicState - 1];
  musicPlayer.currentTime = 0;
  musicPlayer.play().catch(() => {
    /* ignore autoplay block errors */
  });
  musicButton.classList.add("active");
  showMusicIndicator(`♪ ${trackLabels[musicState - 1]} playing`);
}

musicButton.addEventListener("click", () => {
  musicState = (musicState + 1) % 5;
  updateMusicState();
});

// Blog → Home
backBtn.addEventListener("click", () => {
  home.classList.remove("hidden");
  blog.classList.remove("active");
});

poemBackBtn.addEventListener("click", () => {
  home.classList.remove("hidden");
  poemsPanel.classList.remove("active");
});





