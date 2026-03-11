# Phan tích CSS Priority

## Câu 1
Selector có đọ ưu tiên cao nhất là inline style

## Câu 2
Nếu một phần tử có `h1`, `.title`, `#main` cùng set color thì #main tháng vì ID selector có độ ưu tiên cao hơn class và tag.

## Câu 3
Nếu thêm `style="color:pink"` thì inline thắng và màu sẽ là màu pink.

## Câu 4
theme.css override base.css vì fille được load sau trong HTML.
Điều kiện là selector có cùng hoặc cao hơn độ ưu tiên.

## Câu 5
2 phần tử dùng `.title` nhưng màu khác nhau vì:
+, Một phần tử có thêm ID hoặc inline style
+, Hoặc bị override bởi theme.css

## Câu 6
Phần tử phức tạp nhất là:
<h1 class="title" id="special" style="color:red">
Nó chịu ảnh hưởng từ:
+,h1 selector
+,.title
+,#special
+,inline style
+,base.css
+,theme.css

Selector thang cuoi cung la inline style vi co do uu tien cao nhat.