document.getElementById("btn").onclick = function (){
    let login = document.getElementById("login").value;
    let message = login === "Сотрудник" ? alert ("Привет") :
        login === "Директор" ? alert ("Здравствуйте") :
             alert ("Нет логина");
}