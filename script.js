function drawTick(container, x, level, maxLevel) {
  const tick = document.createElement("div");
  tick.className = "tick";
  tick.style.left = x + "px";
  tick.style.height = (80 - level * 12) + "px"; // cao hơn và rõ ràng hơn
  container.appendChild(tick);
}

function drawLabel(container, x, text) {
  const label = document.createElement("div");
  label.className = "label";
  label.style.left = x + "px";
  label.textContent = text;
  container.appendChild(label);
}

function drawRecursive(container, left, right, level, maxLevel, scale) {
  if (level > maxLevel) return;

  const mid = (left + right) / 2;
  const xPixel = mid * scale;

  drawTick(container, xPixel, level, maxLevel);

  drawRecursive(container, left, mid, level + 1, maxLevel, scale);
  drawRecursive(container, mid, right, level + 1, maxLevel, scale);
}

function renderRuler() {
  const container = document.getElementById("ruler");
  container.innerHTML = "";

  let L = parseInt(document.getElementById("inputLength").value);
  let h = parseInt(document.getElementById("inputHeight").value);

  if (isNaN(L) || L <= 0) L = 10;
  if (isNaN(h) || h <= 0) h = 4;

  const scale = 50; // mỗi đơn vị = 50px
  container.style.width = (L * scale) + "px";

  for (let i = 0; i <= L; i++) {
    const x = i * scale;
    drawTick(container, x, 0, h);
    drawLabel(container, x, i.toString());
    drawRecursive(container, i, i + 1, 1, h, scale);
  }
}
