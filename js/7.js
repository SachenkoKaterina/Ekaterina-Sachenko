document.getElementById("btn").onclick = function (){
    let year = document.getElementById("year").value;
    let old = 2022 - year;
    if (old >= 16) alert("Добро пожаловать!");
    else alert("Вход воспрещен!!")
}