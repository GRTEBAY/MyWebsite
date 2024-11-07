document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();  // 阻止表单默认提交行为

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // 保存用户注册信息到 localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully! You can now log in.");
    // 注册成功后，跳转到登录页面
    window.location.href = "login.html";
});
