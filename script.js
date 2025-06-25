function drawTick(container, leftPercent, height, maxHeight) {
  const tick = document.createElement("div");
  tick.className = "tick";
  tick.style.left = leftPercent + "%";
  tick.style.height = height * 10 + "px";

  // Màu gradient từ đỏ (h max) đến xanh (h = 1)
  const hue = 240 - ((height - 1) / (maxHeight - 1)) * 240; // 240 (blue) → 0 (red)
  tick.style.backgroundColor = `hsl(${hue}, 80%, 50%)`;

  container.appendChild(tick);
}

function drawRuler(container, left, right, height, totalLength, maxHeight) {
  if (height <= 0) return;
  const mid = (left + right) / 2;
  const midPercent = (mid / totalLength) * 100;
  drawTick(container, midPercent, height, maxHeight);
  drawRuler(container, left, mid, height - 1, totalLength, maxHeight);
  drawRuler(container, mid, right, height - 1, totalLength, maxHeight);
}

function renderRuler() {
  const ruler = document.getElementById("ruler");
  ruler.innerHTML = "";

  let L = parseFloat(document.getElementById("inputLength").value);
  let h = parseInt(document.getElementById("inputHeight").value);

  if (isNaN(L) || L <= 0) {
    alert("Độ dài L phải > 0. Đang đặt lại L = 100");
    L = 100;
    document.getElementById("inputLength").value = 100;
  }
  if (isNaN(h) || h <= 0) {
    alert("Chiều cao h phải > 0. Đang đặt lại h = 4");
    h = 4;
    document.getElementById("inputHeight").value = 4;
  }

  drawRuler(ruler, 0, L, h, L, h);
}

// Vẽ mặc định khi tải trang
renderRuler();
