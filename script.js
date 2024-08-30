const fortuneCookie = document.getElementById("fortune-cookie");
const fortuneText = document.getElementById("fortune");
const backgroundMusic = document.getElementById("background-music");
const fortunes = [
  "😼",
  "...",
  "hi",
  "nag repost ko about",
  "smtng na if mag mirror shot",
  "sa story",
  "kay like mo amin na",
  "but since nag mirror shot ka",
  "and not sure if kita ba kas repost nako",
  "but if wala kay",
  "ayaw nag e click ang cat",
  "...",
  "...",
  "pero sige",
  "anyways",
  "I js",
  "want to",
  "let you",
  "know",
  "na",
  "na",
  "naa",
  "naaa",
  "naaaa",
  "naaaaa",
  "naaaaaa",
  "naaaaaaa",
  "naaaaaaaa",
  "naaaaaaaaa",
  "naaaaaaaaaa",
  "naaaaaaaaaaa",
  "naaaaaaaaaaaa",
  "wait",
  "sooooooo",
  "ooooooooo",
  "I’ve been trying to tell you this for a long time",
  "but haven't had the chance to do so",
  "and prolly late na guro ko maka sulti",
  "but",
  "I js wanna say",
  "na",
  "I",
  "like",
  "you",
  "and",
  "have",
  "always",
  "felt this way about you.",
  "🌷",
  "🌷",
  "...",
  "...",
  "...",
  "wana ma shy type nasad ko ani",
  "...",
  "...",
  "BYEEE"
  

];

let currentFortuneIndex = 0;
let isMusicPlaying = false; // Track if the music is already playing

fortuneCookie.addEventListener("click", () => {
  fortuneText.textContent = fortunes[currentFortuneIndex];
  fortuneText.style.opacity = 1;

  currentFortuneIndex = (currentFortuneIndex + 1) % fortunes.length;

  fortuneCookie.style.transform = "scale(0.9)";
  setTimeout(() => {
    fortuneCookie.style.transform = "scale(1)";
  }, 150);

  // Play music on the first click
  if (!isMusicPlaying) {
    backgroundMusic.play();
    isMusicPlaying = true; // Set the flag to true once the music starts playing
  }
});
