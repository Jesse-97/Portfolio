function istTime() {
  const now = new Date();

  const currentTime = new Date(now.getTime());

  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");

  document.getElementById("ist-time").textContent = `${hours}:${minutes}`;
}

istTime();
setInterval(istTime, 1000);

const messages = [
  "Aspiring Developer",
  "Computer Science Student",
  "AI Enthusiast",
  "Innovator",
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

typeWriter();
