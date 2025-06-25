function drawTick(container, left, height) {
  const tick = document.createElement("div");
  tick.className = "tick";
  tick.style.left = left + "%";
  tick.style.height = height * 10 + "px";
  container.appendChild(tick);
}

function drawRuler(container, left, right, height) {
  if (height <= 0) return;
  const mid = (left + right) / 2;
  drawTick(container, mid, height);
  drawRuler(container, left, mid, height - 1);
  drawRuler(container, mid, right, height - 1);
}

const ruler = document.getElementById("ruler");
drawRuler(ruler, 0, 100, 4); // 4 là độ sâu vạch chia
