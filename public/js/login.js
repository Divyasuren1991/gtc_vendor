$(document).ready(function () {
    $("#loginForm").submit(function (e) {
        e.preventDefault();

        var email = $("#email").val();
        var password = $("#password").val();

        if (!email || !password) {
            alert("Enter required fields");
            return;
        }

        var loginObj = {
            email,
            password
        }

        $.ajax({
            type: "POST",
            url: "http://localhost:5000/api/users/login",
            data: loginObj,
            success: function () {
                alert("Login successful");
            },
            error: function(error){
                console.log(error);
                alert("Unable to login");
            }
        })
    })

})