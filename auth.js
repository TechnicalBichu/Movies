
// Binary for "Dragon2025"
const encodedKey = ["01000100","01110010","01100001","01100111","01101111","01101110","00110010","00110000","00110010","00110101"];

function decodeBinaryKey() {
  return encodedKey.map(b => String.fromCharCode(parseInt(b, 2))).join("");
}

function getTodayKey() {
  const d = new Date();
  return `unlock_${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function validateGateKey() {
  const userInput = document.getElementById("gateKeyInput").value;
  const key = decodeBinaryKey();
  if (userInput === key) {
    localStorage.setItem(getTodayKey(), "true");
    window.location.href = "index-1.html";
  } else {
    document.getElementById("accessError").innerText = "Invalid access code!";
  }
}

// For all pages except index.html
(function autoRedirect() {
  const isMain = location.pathname.endsWith("index.html");
  const key = getTodayKey();
  const unlocked = localStorage.getItem(key) === "true";
  if (!isMain && !unlocked) {
    window.location.href = "index.html";
  }
})();
