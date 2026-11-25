# Yêu cầu nhập website vào Lovable

Nguồn gốc: https://github.com/ducthanhaiva/webducthanh

Giữ nguyên thiết kế đã duyệt: nền sáng, navy và teal, thương hiệu cá nhân Nguyễn Đức Thanh – AIVA. Dùng toàn bộ code trong ZIP làm nguồn chính. Giữ đủ các trang, nội dung, tài liệu tải về, bộ lọc và phiếu tự đánh giá.

## Sau khi nhập

1. Cài phụ thuộc và chạy build. Đảm bảo deep link mọi route hoạt động.
2. Giữ ảnh minh họa và chú thích; chưa có ảnh thật. Không tự tìm hình ảnh người khác để nhận là Nguyễn Đức Thanh.
3. Nếu nền tảng cần chuyển stack, bảo toàn UI và toàn bộ nội dung, không rút gọn section.
4. Kết nối Lovable Cloud để tiếp nhận contact_requests. Dùng schema và Edge Function trong supabase/. Không mở quyền đọc yêu cầu cho người truy cập công khai. Không đưa service-role key vào frontend.
5. Đặt VITE_CONTACT_ENDPOINT trỏ đến hàm đã triển khai; chỉ báo thành công khi máy chủ xác nhận. Kiểm tra ghi dữ liệu bằng yêu cầu thử được ghi rõ là thử nghiệm, không dùng thông tin cá nhân thật.
6. Thông tin email/phone/social chưa có xác nhận thì để trống. Không tự tạo giá, lịch, khách hàng, thành tích, phản hồi hoặc chính sách.
7. Kiểm tra responsive, navigation, tài liệu tải về, tìm kiếm/lọc, self-assessment, form validation và trạng thái lỗi.

## Đã có nội dung

Trang chủ; Về Đức Thanh; Đào tạo AI; 4 trang chương trình; Workshop; Ứng dụng AI; Tài nguyên; 4 bài viết; Liên hệ; Thông tin biểu mẫu; 404. Nội dung chương trình là khung tham khảo cần thống nhất phạm vi, không phải cam kết thương mại cố định.

## GitHub và Lovable

Import ZIP tạo bản sao. Kho webducthanh là mã nguồn ban đầu. Không khẳng định đồng bộ hai chiều nếu chưa kết nối và kiểm tra. Lovable tạo một kho mới khi bật Git sync; cần ghi lại kho thực tế sau khi kết nối.
