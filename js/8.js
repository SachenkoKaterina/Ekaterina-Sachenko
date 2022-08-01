document.getElementById("btn").onclick = function () {
    let year = document.getElementById("nadbavka").value;
    year = parseFloat(year);
    if (year >= 0 && year <= 3) alert("0%");
    else if (year >= 3 && year <= 10) alert("10%");
    else if (year >= 10 && year <= 20) alert("20%");
    else if (year >= 20 ) alert("25%");
    else alert("Error");
}