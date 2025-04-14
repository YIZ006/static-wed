document.addEventListener("DOMContentLoaded", function () {
    fetch("section_hot_book.html")
        .then(response => response.text()) // Lấy nội dung file HTML
        .then(data => document.getElementById("section_hot_book").innerHTML = data) // Nhúng vào div
        .catch(error => console.error("Không thể tải menu:", error));
});
