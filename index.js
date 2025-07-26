//Time Code

function istTime() {
  const now = new Date();

  const currentTime = new Date(now.getTime());

  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");

  document.getElementById("ist-time").textContent = `${hours}:${minutes}`;
}

istTime();
setInterval(istTime, 1000);

//Typewriter

const messages = [
  "Aspiring Developer",
  "Computer Science Student",
  "AI Enthusiast",
  "Autistic",
];

let messageIndex = 0;
let charIndex = 0;
let typing = true;

const element = document.getElementById("typewriter");

function typeWriter() {
  const currentMessage = messages[messageIndex];
  if (typing) {
    if (charIndex < currentMessage.length) {
      element.textContent += currentMessage.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 75);
    } else {
      typing = false;
      setTimeout(typeWriter, 750);
    }
  } else {
    if (charIndex > 0) {
      element.textContent = currentMessage.slice(0, --charIndex);
      setTimeout(typeWriter, 40);
    } else {
      typing = true;
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(typeWriter, 500);
    }
  }
}

if (!element) {
  console.error("Element with id='typewriter' not found!");
} else {
  typeWriter();
}

//Spotify-Embed

const tracks = [
  "2aPTvyE09vUCRwVvj0I8WK",
  "1AWQoqb9bSvzTjaLralEkT",
  "1oYYd2gnWZYrt89EBXdFiO",
  "5rb9QrpfcKFHM1EUbSIurX",
  "6inVHhmG2qEhwFR2eiWXjH",
  "7FOXrArO9CU6xVZotChlD8",
  "7mdvPu1ZAOIgMzr3sfpAqk",
  "6LxSe8YmdPxy095Ux6znaQ",
  "3Ueq2zboxwAbsvHrOjdEqz",
  "1SGt65i9AnXYdDQt1AtDRH",
  "1Es7AUAhQvapIcoh3qMKDL",
  "7CyPwkp0oE8Ro9Dd5CUDjW",
  "4jVBIpuOiMj1crqd8LoCrJ",
  "0uxSUdBrJy9Un0EYoBowng",
  "51EC3I1nQXpec4gDk0mQyP",
  "2HomNHG3XI5BTmtK8Jgxo9",
  "1FHNctV68GUNLgXclG2DtR",
  "1UNEuG9DYOWiikf00ayr52",
  "5K9tfeoiztw94dyWzF39jq",
  "3LCvEUqmh19LDdMkq3PTlz",
  "0hYsO3EXh8wq2y7lrI6quy",
  "3414vfp4uaJNFqFFj9sUvz",
  "4iFPsNzNV7V9KJgcOX7TEO",
  "63Pi2NAx5yCgeLhCTOrEou",
  "7GVUmCP00eSsqc4tzj1sDD",
  "3aCPResPDNae3pXTocGpYe",
  "6EUcP55GlbmsmCzfL2vxtZ",
  "5QOBT97OmYCZo1W5u7tRrB",
  "1pKYYY0dkg23sQQXi0Q5zN",
  "28DlaPydCnrs8NxYOnUPZ8",
  "5ivRSlOhVIXN2QMzqgsX0s",
  "1EA40FX9aBaKIXwIp83WzL",
];

const now = new Date();
const rnTime = new Date(now.getTime());
const currentDay = rnTime.getDate();

const index = currentDay % tracks.length;
const trackID = tracks[index];

const embedUrl = `https://open.spotify.com/embed/track/${trackID}?utm_source=generator&theme=0`;

document.getElementById("spotify-player").src = embedUrl;
