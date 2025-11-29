document.getElementById("speedUp").addEventListener("click", async () => {
  await chrome.scripting.executeScript({
    target: { tabId: (await chrome.tabs.query({ active: true, currentWindow: true }))[0].id },
    func: () => {
      const video = document.querySelector("video");
      if (video) {
        video.playbackRate += 1.0;
        alert("Speed increased to: " + video.playbackRate + "x");
      } else {
        alert("No video found on this page.");
      }
    }
  });
});
