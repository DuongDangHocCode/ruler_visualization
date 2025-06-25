function drawTick(container, xPixel, height, maxHeight) {
  const tick = document.createElement("div");
  tick.className = "tick";
  tick.style.left = xPixel + "px";
  tick.style.height = height * 10 + "px";

  // Gradient màu theo chiều cao
  const hue = 240 - ((height - 1) / (maxHeight - 1)) * 240;
  tick.style.backgroundColor = `hsl(${hue}, 80%, 50%)`;

  container.appendChild(tick);
}

function drawRuler(container, left, right, height, scale, maxHeight) {
  if (height <= 0) return;
  const mid = (left + right) / 2;
  const midPixel = mid * scale;
  drawTick(container, midPixel, height, maxHeight);
  drawRuler(container, left, mid, height - 1, scale, maxHeight);
  drawRuler(container, mid, right, height - 1, scale, maxHeight);
}

function renderRuler() {
  const ruler = document.getElementById("ruler");
  ruler.innerHTML = "";

  let L = parseInt(document.getElementById("inputLength").value);
  let h = parseInt(document.getElementById("inputHeight").value);

  if (isNaN(L) || L <= 0) {
    alert("Độ dài L phải > 0. Đang đặt lại L = 16");
    L = 16;
    document.getElementById("inputLength").value = 16;
  }
  if (isNaN(h) || h <= 0) {
    alert("Chiều cao h phải > 0. Đang đặt lại h = 4");
    h = 4;
    document.getElementById("inputHeight").value = 4;
  }

  const scale = 10; // 1 đơn vị độ dài = 10px
  ruler.style.width = L * scale + "px";
  drawRuler(ruler, 0, L, h, scale, h);
}
