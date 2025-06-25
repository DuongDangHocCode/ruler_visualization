function drawTick(container, x, level, maxLevel) {
  const tick = document.createElement("div");
  tick.className = "tick";
  tick.style.left = x + "px";

  const maxHeight = 100;
  const minHeight = 20;
  const step = (maxHeight - minHeight) / (maxLevel - 1 || 1);
  const height = minHeight + (level - 1) * step;

  tick.style.height = height + "px";
  container.appendChild(tick);
}
function drawLabel(container, x, text) {
  const label = document.createElement("div");
  label.className = "label";
  label.style.left = x + "px";
  label.textContent = text;
  container.appendChild(label);
}

function collectMidpoints(points) {
  const mids = [];
  for (let i = 0; i < points.length - 1; i++) {
    const mid = (points[i] + points[i + 1]) / 2;
    mids.push(mid);
  }
  return mids;
}

function renderRuler() {
  const container = document.getElementById("ruler");
  container.innerHTML = "";

  let L = parseInt(document.getElementById("inputLength").value);
  let h = parseInt(document.getElementById("inputHeight").value);

  if (isNaN(L) || L <= 0) L = 10;
  if (isNaN(h) || h <= 0) h = 4;

  const maxWidth = 1000;
  const scale = Math.floor(maxWidth / L);
  container.style.width = (L * scale) + "px";

  const delayStep = 60;
  let delay = 0;

  // ✅ Bắt đầu với vạch chính: 0,1,...,L
  let positions = [];
  for (let i = 0; i <= L; i++) {
    const pos = i;
    positions.push(pos);
    const x = pos * scale;

    setTimeout(() => {
      drawTick(container, x, h, h);
      drawLabel(container, x, i.toString());
    }, delay);
    delay += delayStep;
  }

  // ✅ Từng tầng tiếp theo: h-1, h-2, ..., 1
  for (let level = h - 1; level >= 1; level--) {
    const midpoints = [];
    for (let i = 0; i < positions.length - 1; i++) {
      const mid = (positions[i] + positions[i + 1]) / 2;
      midpoints.push(mid);
    }

    midpoints.forEach((pos, i) => {
      const x = pos * scale;
      setTimeout(() => {
        drawTick(container, x, level, h);
      }, delay + i * delayStep);
    });

    delay += midpoints.length * delayStep + 300;
    positions = [...positions, ...midpoints].sort((a, b) => a - b);
  }
}
