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
