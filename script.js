document.addEventListener('DOMContentLoaded', function () {
  const cursorLight = document.createElement('div');
  cursorLight.classList.add('cursor-light');
  document.body.appendChild(cursorLight);

  document.addEventListener('mousemove', function (e) {
    cursorLight.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
});

let darkModeEnabled = false;

function redirectToDiscord() {
  window.location.href = "https://discord.com/invite/dc5WxnmT";
}

function redirectToRules() {
  window.location.href = "rules.html";
}

function toggleDarkMode() {
  const stylesheet = document.getElementById('stylesheet');
  if (!darkModeEnabled) {
    stylesheet.href = 'styles2.css';
    darkModeEnabled = true;
  } else {
    stylesheet.href = 'styles.css';
    darkModeEnabled = false;
  }
}
