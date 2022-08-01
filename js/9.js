document.getElementById("btn1").onclick = function (){
    let day1 = document.getElementById("day1").value;
    day1 = parseFloat(day1);
    if (day1 === 1) alert("Monday");
    else if (day1 === 2) alert("Tuesday");
    else if (day1 === 3) alert("Wednesday");
    else if (day1 === 4) alert("Thursday");
    else if (day1 === 5) alert("Friday");
    else if (day1 === 6) alert("Saturday");
    else if (day1 === 7) alert("Sunday");
    else alert("Error");
}

document.getElementById("btn3").onclick = function () {
    let day3 = document.getElementById("day3").value;
    day3 = parseFloat(day3);
    switch (day3) {
        case 1:
            alert("Monday")
            break;
        case 2:
            alert("Tuesday")
            break;
        case 3:
            alert("Wednesday")
            break;
        case 4:
            alert("Thursday")
            break;
        case 5:
            alert("Friday")
            break;
        case 6:
            alert("Saturday")
            break;
        case 7:
            alert("Sunday")
            break;
        default:
            alert("Error");
            break;
    }
}

document.getElementById("btn2").onclick = function () {
    let day2 = document.getElementById("day2").value;
    day2 = parseFloat(day2);
    const ternar = day2 === 1 ? alert("Monday") :
        day2 === 2 ? alert("Tuesday") :
            day2 === 3 ? alert("Wednesday") :
                day2 === 4 ? alert("Thursday") :
                    day2 === 5 ? alert("Friday") :
                        day2 === 6 ? alert("Saturday") :
                            day2 === 7 ? alert("Sunday") :
                               alert("Error")
}


