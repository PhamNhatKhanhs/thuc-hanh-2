
document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    sidebar.innerHTML = `
        <ul>
            <li><a href="index.html">Trang Chủ</a></li>
            <li><a href="quanlykhoa.html">Quản lý khoa</a></li>
            <!-- Other sidebar items -->
        </ul>
    `;
    document.body.insertBefore(sidebar, document.body.firstChild);
});
