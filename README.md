# 🧭 Mô phỏng Thuật Toán Vẽ Thước Đệ Quy

Trong quá trình học và khám phá thuật toán chia để trị, em rất ấn tượng với cách mô phỏng **thước đo** bằng thuật toán đệ quy. Vì vậy, em đã tạo nên một trang web mô phỏng cây thước thật, với các vạch được chia nhỏ dần theo chiều cao.


## 💡 Ý tưởng và thuật toán

- Bài toán: vẽ cây thước với các vạch chia đệ quy, thể hiện quá trình chia để trị
- Áp dụng:
  - **Tư duy đệ quy**: vạch chính chia tiếp → chia tiếp midpoint
- Giải pháp:
  - Bắt đầu từ mốc `0 → L`, cấp độ `h`
  - Ở mỗi tầng:
    - Lấy midpoint giữa các vị trí đang có
    - Vẽ vạch mới ở vị trí đó, cấp độ giảm đi 1
    - Lặp lại đến khi cấp độ = 1

---

## 🌐 Link Demo
https://duongdanghoccode.github.io/ruler_visualization/

## 📦 Cách sử dụng

1. Mở file `index.html` bằng trình duyệt.
2. Nhập `Độ dài thước` và `Độ dài vạch`.
3. Nhấn **"Vẽ"** để xem cây thước được vẽ.
---

