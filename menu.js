document.addEventListener("DOMContentLoaded", function () {
    fetch("menu.html")
        .then(response => response.text()) // Lấy nội dung file HTML
        .then(data => document.getElementById("menu").innerHTML = data) // Nhúng vào div
        .catch(error => console.error("Không thể tải menu:", error));
});
