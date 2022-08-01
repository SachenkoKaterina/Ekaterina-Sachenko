
    document.getElementById("btn").onclick = function (){
        let entr = document.getElementById("entr").value;
        entr = parseFloat(entr)
        if (entr >= 1 && entr <= 20) alert("Первый подьезд");
        else if (entr >= 21 && entr <= 48) alert("Второй подьезд");
        else if (entr >= 49 && entr <= 90) alert("Третий подьезд");
        else alert("Error");
    }

