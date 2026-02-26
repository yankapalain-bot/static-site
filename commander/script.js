// Find elements
const launchBtn = document.getElementById("launch-btn");
const missionStatus = document.getElementById("mission-status");
const explorerName = document.getElementById("explorer-name");

// Launch button click
launchBtn.addEventListener("click", function() {
  launchMission();
});

// The launch function
function launchMission() {
  launchBtn.textContent = "🛸 Mission Active!";
  launchBtn.disabled = true;
  missionStatus.textContent = "📡 Signal received. Destination: Saturn orbit.";
  missionStatus.classList.add("status-active");
}

// Double-click name to rename
explorerName.addEventListener("dblclick", function() {
  const newName = prompt("Enter your explorer name:");
  if (newName) {
    explorerName.textContent = newName;
  }
});
