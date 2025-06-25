# 🧭 Mô phỏng Thuật Toán Vẽ Thước Đệ Quy

Trong quá trình học và khám phá thuật toán chia để trị, em rất ấn tượng với cách mô phỏng **thước đo** bằng thuật toán đệ quy. Vì vậy, em đã tạo nên một trang web mô phỏng cây thước thật, với các vạch được chia nhỏ dần theo chiều cao.

---

## 💡 Ý tưởng

- Bắt đầu vẽ các vạch chính ở vị trí 0, 1, ..., L với chiều cao lớn nhất `h`.
- Sau đó:
  - Vẽ các vạch nằm giữa (ví dụ: 0.5, 1.5, ...) với `h - 1`.
  - Tiếp tục chia tiếp các đoạn giữa với `h - 2`, `h - 3`, ..., đến 1.
- Mỗi tầng vạch sẽ được vẽ **tuần tự từ trái sang phải**, sau đó mới đến tầng kế tiếp.

---

## 📦 Cách sử dụng

1. Mở file `index.html` bằng trình duyệt.
2. Nhập `Độ dài thước` và `Độ dài vạch`.
3. Nhấn **"Vẽ"** để xem cây thước được vẽ từng lớp một cách sinh động.

---

