async function changeSpeed(delta) {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (delta) => {
      const video = document.querySelector("video");
      if (video) {
        video.playbackRate = Math.max(0.1, video.playbackRate + delta); 
        alert("Speed: " + video.playbackRate.toFixed(2) + "x");
      } else {
        alert("No video found on this page.");
      }
    },
    args: [delta]
  });
}

document.getElementById("increase").addEventListener("click", () => changeSpeed(0.5));
document.getElementById("decrease").addEventListener("click", () => changeSpeed(-0.5));
