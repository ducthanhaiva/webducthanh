# Nguyễn Đức Thanh – AIVA

Website thương hiệu cá nhân, thiết kế trắng/ngà – navy – teal. React + TypeScript + Vite, nội dung tiếng Việt. Mã nguồn gốc được chuẩn bị cho GitHub trước khi nhập Lovable.

## Phát triển

```sh
npm install
npm run dev
npm run build
```

## Nội dung

- Trang chủ có 10 phần nội dung và CTA.
- Về Đức Thanh, Đào tạo AI, 4 trang chương trình, Workshop, Ứng dụng AI.
- Tài nguyên: 4 bài viết đầy đủ, tìm kiếm/lọc, 3 tài liệu tải về, phiếu tự đánh giá.
- Liên hệ, thông tin biểu mẫu, 404.
- Giao diện đáp ứng, menu điện thoại, điều hướng bàn phím, FAQ, metadata từng trang.

## Thông tin cần chủ website cung cấp

Ảnh nhân vật đang là minh họa, có chú thích. Chương trình là khung tham khảo, không có giá, lịch, case study, chứng nhận, lời chứng thực hay số liệu tự tạo. Không đưa email cá nhân hoặc số điện thoại chưa được xác nhận lên website.

Liên hệ/mạng xã hội được cấu hình qua biến VITE_PUBLIC_EMAIL, VITE_PUBLIC_PHONE, VITE_FACEBOOK_URL, VITE_YOUTUBE_URL, VITE_ZALO_URL (xem .env.example). Không cấu hình thì không hiển thị liên kết giả.

## Tiếp nhận biểu mẫu

VITE_CONTACT_ENDPOINT là URL HTTPS tiếp nhận JSON POST gồm name, contact, company, need, message, consent, source. Chỉ hiển thị thành công khi máy chủ trả 2xx. Khi chưa kết nối, biểu mẫu tạo phiếu tải về và thông báo rõ chưa gửi. Không lưu yêu cầu liên hệ vào localStorage.

Có hàm Supabase Edge Function và migration kèm theo trong supabase/. Cần triển khai máy chủ và đặt biến trước khi dùng tiếp nhận thật. Phần tự đánh giá chạy trong trình duyệt, không tự gửi dữ liệu.

## Nhập Lovable

Đóng gói code, cấu hình, ảnh và tài liệu thành ZIP; bỏ node_modules, dist, .git và mọi .env. Trong Lovable dashboard: nút + → Import project to Lovable → Upload code → Start import. Nhập giữ thiết kế, nội dung và luồng đã có; không yêu cầu tạo lại theo trí nhớ.

Lovable Git sync tạo kho mới khi kết nối; import ZIP không tự đồng bộ với kho webducthanh gốc. Xem docs/LOVABLE_HANDOFF.md.
