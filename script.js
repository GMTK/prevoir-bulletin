function calcul() {

    document.getElementById("mg").style.display = "block"
    document.getElementById("credit").style.display = "block"
    document.getElementById("vt").style.display = "block"

    //

    let credit = document.getElementsByClassName("credit")
    let tp = document.getElementsByClassName("tp")
    let cc = document.getElementsByClassName("cc")
    let exam = document.getElementsByClassName("exam")
    let nf = document.getElementsByClassName("nf")
    let dec = document.getElementsByClassName("dec")

    const mods = document.getElementsByClassName("modules")
    const mdec = document.getElementsByClassName("mdec")

    //

    for (let i = 0; i < nf.length; i++) {

        if (tp[i].value == "0.0") {
            nf[i].value = Math.round((cc[i].value * 2 + exam[i].value * 3) / 5 * 100) / 100
        }
        else {
            if (cc[i].value == "0.0" && exam[i].value == "0.0") {
                nf[i].value = tp[i].value
            }
            else {
                nf[i].value = Math.round(( tp[i].value * 1 + cc[i].value * 2 + exam[i].value * 3) / 6 * 100) / 100
            }
        }

    }

    //

    let mg = 0

    let c = 0

    for (let i = 0; i < mods.length; i++) {

        str = "mod" + (i + 1)
        tempcd = 0
        tempmod = document.getElementsByClassName(str)
        tempmodvalue = 0

        for (let j = 0; j < tempmod.length; j++) {

            tempmodvalue += tempmod[j].value * credit[c].value
            tempcd += parseInt(credit[c].value)
            c += 1

        }
        mods[i].value = Math.round(tempmodvalue / tempcd * 100) / 100
        mg += mods[i].value * tempcd
    }

    mg = Math.round(mg / 30 * 100) / 100
    document.getElementById("mg").value = mg

    //

    d = 0

    for (let i = 0; i < mods.length; i++) {

        str = "mod" + (i + 1)
        tempmod = document.getElementsByClassName(str)
        mdec[i].value = "V"
        console.log(mods[i])
        
        if ((mods[i].value < 9 ) || (mods[i].value < 10 && mg < 10)) {
            mdec[i].value = "NV"
        }

        for (let j = 0; j < tempmod.length; j++) {
            if (tempmod[j].value < 7) {
                mdec[i].value = "NV"
                break
            }
        }

        for (let j = 0; j < tempmod.length; j++) {

            if (tempmod[j].value >= 10 || mdec[i].value == "V") {
                dec[d].value = "V"
                d += 1
            }
            else {
                dec[d].value = "R"
                d += 1
            }

        }

    }

    //

    let creditFinal = 0

    for (let i = 0; i < dec.length; i++) {

        if (dec[i].value == "V") {

            creditFinal += parseInt(credit[i].value)

        }

    }

    document.getElementById("credit").value = creditFinal

    for (let i = 0; i < dec.length; i++) {

        if (dec[i].value == "R") {

            document.getElementById("vt").value = "R"
            break

        }

        document.getElementById("vt").value = "V"

    }


}