document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // 阻止表单默认提交行为

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // 从 localStorage 获取注册时保存的邮箱和密码
    var storedEmail = localStorage.getItem("userEmail");
    var storedPassword = localStorage.getItem("userPassword");

    // 验证用户输入的邮箱和密码
    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "dashboard.html";  // 登录成功，跳转到 Dashboard 页面
    } else {
        alert("Invalid email or password.");
    }
});
