(function () {
    let video = document.querySelector('video');
    if (!video) return

    const btn = document.createElement("div");
    btn.id = "faster-btn";
    btn.innerText = "⚡";
    btn.style.opacity = "1"

    video.parentElement.style.position = "relative";
    video.parentElement.appendChild(btn)

    let hideTimeOut= setTimeout(() => {
        btn.style.opacity = "0"
    }, 3000);

    btn.addEventListener("mouseover", () => {
        btn.style.opacity = "1";
        clearTimeout(hideTimeOut);
    });

    btn.addEventListener("mouseleave", () => {
        hideTimeOut= setTimeout(() => {
            btn.style.opacity = "0";
        }, 1500);
    });
    const panel = document.createElement("div");
    panel.id = "faster-speed-panel";
  
    panel.innerHTML = `
      <div class="speed-option" data-speed="1.0">1.0x</div>
      <div class="speed-option" data-speed="1.5">1.5x</div>
      <div class="speed-option" data-speed="2.0">2.0x</div>
      <div class="speed-option" data-speed="2.5">2.5x</div>
  
      <div class="speed-buttons">
        <div id="faster-dec" class="speed-btn">-</div>
        <div id="faster-inc" class="speed-btn">+</div>
      </div>
    `;
  
    video.parentElement.appendChild(panel);
  
    btn.addEventListener("click", () => {
      panel.style.display =
        panel.style.display === "block" ? "none" : "block";
    });
  
    panel.querySelectorAll(".speed-option").forEach(el => {
      el.addEventListener("click", () => {
        const speed = parseFloat(el.dataset.speed);
        video.playbackRate = speed;
      });
    });
  
    document.getElementById("faster-inc").onclick = () => {
      video.playbackRate = Math.min(5, video.playbackRate + 0.1);
    };
  
    document.getElementById("faster-dec").onclick = () => {
      video.playbackRate = Math.max(0.1, video.playbackRate - 0.1);
    };
  })();
