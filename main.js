const yearOfBirth = prompt("Mời bạn nhập năm sinh của Trần Văn Quyền:");

if (yearOfBirth === "2001") {
    document.body.classList.add('block');
    alert("Đăng nhập thành công !!!\n- Sent by Trần Văn Quyền -")
    document.body.classList.remove('hidden');
} else {
    alert("Sai mật khẩu !!!\n- Sent by Trần Văn Quyền -")
    window.location.href = "https://www.google.com";
}