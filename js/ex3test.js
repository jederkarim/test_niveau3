function ex3() {
    ch1 = prompt("Donner une chaine de caractere")
    ch2 = ""
    ch2 = ch2 + toUpperCase(ch1[0] + '.')

    for (let i = 1; i < ch1.length; i++) {
        if (ch1[i] == "") {
            ch2 += ch2 + ch1[i + 1]
        }
    }
    console.log(ch2);
}ex3();