function calcul() {

    document.getElementById("nf1").value = Math.round((document.getElementById("td1").value * 2.0 + document.getElementById("ex1").value * 3.0) / 5 * 100) / 100
    document.getElementById("nf2").value = Math.round((document.getElementById("tp2").value * 1 + document.getElementById("td2").value * 2 + document.getElementById("ex2").value * 3) / 6 * 100) / 100
    document.getElementById("mod1").value = Math.round((document.getElementById("nf1").value * 1 + document.getElementById("nf2").value * 1) / 2 * 100) / 100

    document.getElementById("nf3").value = Math.round((document.getElementById("tp3").value * 1 + document.getElementById("td3").value * 2 + document.getElementById("ex3").value * 3) / 6 * 100) / 100
    document.getElementById("nf4").value = Math.round((document.getElementById("tp4").value * 1 + document.getElementById("td4").value * 2 + document.getElementById("ex4").value * 3) / 6 * 100) / 100
    document.getElementById("mod2").value = Math.round((document.getElementById("nf3").value * 1 + document.getElementById("nf4").value * 1) / 2 * 100) / 100

    document.getElementById("nf5").value = Math.round((document.getElementById("td5").value * 2.0 + document.getElementById("ex5").value * 3.0) / 5 * 100) / 100
    document.getElementById("nf6").value = Math.round((document.getElementById("td6").value * 2.0 + document.getElementById("ex6").value * 3.0) / 5 * 100) / 100
    document.getElementById("mod3").value = Math.round((document.getElementById("nf5").value * 1 + document.getElementById("nf6").value * 1) / 2 * 100) / 100

    document.getElementById("nf7").value = Math.round((document.getElementById("tp7").value * 1 + document.getElementById("td7").value * 2 + document.getElementById("ex7").value * 3) / 6 * 100) / 100
    document.getElementById("nf8").value = document.getElementById("tp8").value
    document.getElementById("mod4").value = Math.round((document.getElementById("nf7").value * 1 + document.getElementById("nf8").value * 1) / 2 * 100) / 100

    document.getElementById("nf9").value = Math.round((document.getElementById("td9").value * 2.0 + document.getElementById("ex9").value * 3.0) / 5 * 100) / 100
    document.getElementById("nf10").value = Math.round((document.getElementById("td10").value * 2.0 + document.getElementById("ex10").value * 3.0) / 5 * 100) / 100
    document.getElementById("mod5").value = Math.round((document.getElementById("nf9").value * 1 + document.getElementById("nf10").value * 1) / 2 * 100) / 100

    
    document.getElementById("mg").value = Math.round((document.getElementById("mod1").value * 1 + document.getElementById("mod2").value * 1 + document.getElementById("mod3").value * 1 + document.getElementById("mod4").value * 1 + document.getElementById("mod5").value * 1) / 5 * 100) / 100


    //
    
    const mg = document.getElementById("mg").value
    const mods = [document.getElementById("mod1").value, document.getElementById("mod2").value, document.getElementById("mod3").value, document.getElementById("mod4").value, document.getElementById("mod5").value]
    const elem = [document.getElementById("nf1").value, document.getElementById("nf2").value, document.getElementById("nf3").value, document.getElementById("nf4").value, document.getElementById("nf5").value, document.getElementById("nf6").value, document.getElementById("nf7").value, document.getElementById("nf8").value, document.getElementById("nf9").value, document.getElementById("nf10").value]
    const dec = [document.getElementById("dec1"), document.getElementById("dec2"), document.getElementById("dec3"), document.getElementById("dec4"), document.getElementById("dec5"), document.getElementById("dec6"), document.getElementById("dec7"), document.getElementById("dec8"), document.getElementById("dec9"), document.getElementById("dec10")]
    const mdec = [document.getElementById("mdec1"), document.getElementById("mdec2"), document.getElementById("mdec3"), document.getElementById("mdec4"), document.getElementById("mdec5")]

    for (let i = 0; i < mods.length; i++) {
        if ((mods[i] >= 10) || (mods[i] >= 9 && mg >= 10 && elem[i] >= 7 && elem[i] + 1 >= 7)) {
            mdec[i].value = "V"
        }
        else {
            mdec[i].value = "NV"
        }

        if (elem[i * 2] >= 10 || mdec[i].value == "V") {
            dec[i * 2].value = "V"
        }
        else {
            dec[i * 2].value = "R"
        }

        if (elem[i * 2 + 1] >= 10 || mdec[i].value == "V") {
            dec[i * 2 + 1].value = "V"
        }
        else {
            dec[i * 2 + 1].value = "R"
        }
    }

    //

    let credit = 0
    validation = []

    for (let i = 0; i < dec.length; i++) {
        if (dec[i].value == "V") {
            credit += 3
        }
        validation.push(dec[i].value)
        
    }
    document.getElementById("credit").value = credit

    if (validation.includes("R")) {
        document.getElementById("vt").value = "R"
    }
    else {
        document.getElementById("vt").value = "V"
    }

    //

    document.getElementById("mg").style.display = "block"
    document.getElementById("credit").style.display = "block"
    document.getElementById("vt").style.display = "block"


}
