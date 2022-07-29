document.getElementById("btn").onclick = function () {
    let login = document.getElementById("Login").value;
    let password = document.getElementById("Password").value;

    if (login === "kykold" && password === "1234asdQQ"){
        alert ("Добро пожаловать!");
    }
    else
        alert ("Ошибка входа!");
}
