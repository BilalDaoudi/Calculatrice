
function Split_Chaine(chaine) {
    let T = [];
    let caractere = "";
    for (let i = 0; i < chaine.length; i++) {
        if (chaine[i] == "+" || chaine[i] == "-" || chaine[i] == "*" || chaine[i] == "/") {
            T.push(caractere);
            T.push(chaine[i]);
            caractere = "";
        }
        else {
            caractere += chaine[i];
        }
        if (i == chaine.length - 1) {
            T.push(caractere);
        }
    }
    return T;
}


function Operation(operateur, T) {
    let T1 = [];
    let i = 0;
    while (i < T.length) {
        if (T[i] == operateur) {
            let Nb = 0;
            if (operateur == "/")
                Nb = parseFloat(T1[T1.length - 1]) / parseFloat(T[i + 1]);
            if (operateur == "*")
                Nb = parseFloat(T1[T1.length - 1]) * parseFloat(T[i + 1]);
            if (operateur == "-")
                Nb = parseFloat(T1[T1.length - 1]) - parseFloat(T[i + 1]);
            if (operateur == "+")
                Nb = parseFloat(T1[T1.length - 1]) + parseFloat(T[i + 1]);
            T1[T1.length - 1] = Nb;
            i += 2
        }
        else {
            T1.push(T[i]);
            i++;
        }
    }
    return T1;
}

function resultat() {
    let chaine = document.getElementById("calcul").value;
    let div = Operation("/", Split_Chaine(chaine));
    let prod = Operation("*", div);
    let Sous = Operation("-", prod);
    let plus = Operation("+", Sous);
    document.getElementById("calcul").value = plus;
}


function _nombre(nb) {
    document.getElementById("calcul").value += nb;
}

function _operateur(op) {
    let ch = document.getElementById("calcul").value;

    if (ch[ch.length - 1] != "*" && ch[ch.length - 1] != "/" && ch[ch.length - 1] != "-" && ch[ch.length - 1] != "+" && ch[ch.length - 1] != ".") {
        document.getElementById("calcul").value += op;
    }
    else {
        let new_ch = ch.slice(0, ch.length - 1) + op;
        document.getElementById("calcul").value = new_ch;
    }
    if (ch == "") {
        document.getElementById("calcul").value = "";
    }
}


function Vider() {
    document.getElementById("calcul").value = "";
}

function _point() {
    let ch = document.getElementById("calcul").value;
    let T = Split_Chaine(ch);
    let test = T[T.length - 1].indexOf(".");
    if (test == -1 && T[T.length - 1] != "") {
        document.getElementById("calcul").value += ".";
    }

}