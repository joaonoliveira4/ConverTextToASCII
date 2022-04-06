const inputTexto = document.querySelector('input');
// Pega o valor do input texto e armazena na constante

const valor = document.querySelector('select');
// Pega o valor do seletor e atribui a variável

const ab = document.getElementById('ab');


function converter() { 
    let val = valor.value 
    // 'valor' é o valor que 'val' vai receber do 'select', dentro do HTML;
    let tex = inputTexto.value;
    // 'tex' recebe o texto de 'input', de dentro do HTML;
    let txtF = "";
    // Texto final, que será exibido;
    let txtSeparado = tex.split("");
    // Separa a 'String' em pedaços, se baseando em caractere por caractere;

    if (val === '0') {
        alert("Você não selecionou")
    } else if (val === '1') {
        for (let i = 0; i <= tex.length; i++) {

            if (txtSeparado[i] == "A") {
                txtF = txtF + "65 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "B") {
                txtF = txtF + "66 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "C") {
                txtF = txtF + "67 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "D") {
                txtF = txtF + "68 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "E") {
                txtF = txtF + "69 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "F") {
                txtF = txtF + "70 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "G") {
                txtF = txtF + "71 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "H") {
                txtF = txtF + "72 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "I") {
                txtF = txtF + "73 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "J") {
                txtF = txtF + "74 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "K") {
                txtF = txtF + "75 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "L") {
                txtF = txtF + "76 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "M") {
                txtF = txtF + "77 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "N") {
                txtF = txtF + "78 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "O") {
                txtF = txtF + "79 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "P") {
                txtF = txtF + "80 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "Q") {
                txtF = txtF + "81 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "R") {
                txtF = txtF + "82 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "S") {
                txtF = txtF + "83 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "T") {
                txtF = txtF + "84 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "U") {
                txtF = txtF + "85 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "V") {
                txtF = txtF + "86 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "W") {
                txtF = txtF + "87 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "X") {
                txtF = txtF + "88 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "Y") {
                txtF = txtF + "89 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "Z") {
                txtF = txtF + "90 ";
                ab.innerHTML = txtF;
            }


            if (txtSeparado[i] == "a") {
                txtF = txtF + "97 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "b") {
                txtF = txtF + "98 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "c") {
                txtF = txtF + "99 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "d") {
                txtF = txtF + "100 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "e") {
                txtF = txtF + "101 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "f") {
                txtF = txtF + "102 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "g") {
                txtF = txtF + "103 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "h") {
                txtF = txtF + "104 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "i") {
                txtF = txtF + "105 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "j") {
                txtF = txtF + "106 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "k") {
                txtF = txtF + "107 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "l") {
                txtF = txtF + "108 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "m") {
                txtF = txtF + "109 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "n") {
                txtF = txtF + "110 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "o") {
                txtF = txtF + "111 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "p") {
                txtF = txtF + "112 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "q") {
                txtF = txtF + "113 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "r") {
                txtF = txtF + "114 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "s") {
                txtF = txtF + "115 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "t") {
                txtF = txtF + "116 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "u") {
                txtF = txtF + "117 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "v") {
                txtF = txtF + "118 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "w") {
                txtF = txtF + "119 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "x") {
                txtF = txtF + "120 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "y") {
                txtF = txtF + "121 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "z") {
                txtF = txtF + "122 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 0) {
                txtF = txtF + "48 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 1) {
                txtF = txtF + "49 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 2) {
                txtF = txtF + "50 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 3) {
                txtF = txtF + "51 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 4) {
                txtF = txtF + "52 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 5) {
                txtF = txtF + "53 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 6) {
                txtF = txtF + "54 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 7) {
                txtF = txtF + "55 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 8) {
                txtF = txtF + "56 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 9) {
                txtF = txtF + "57 ";
                ab.innerHTML = txtF;
            }
        }

    } else if (val === '2') {

        for (let i = 0; i <= tex.length; i++) {
            if (txtSeparado[i] == "A") {
                txtF = txtF + "41 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "B") {
                txtF = txtF + "42 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "C") {
                txtF = txtF + "43 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "D") {
                txtF = txtF + "44 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "E") {
                txtF = txtF + "45 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "F") {
                txtF = txtF + "46 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "G") {
                txtF = txtF + "47 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "H") {
                txtF = txtF + "48 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "I") {
                txtF = txtF + "49 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "J") {
                txtF = txtF + "50 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "K") {
                txtF = txtF + "51 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "L") {
                txtF = txtF + "52 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "M") {
                txtF = txtF + "53 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "N") {
                txtF = txtF + "54 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "O") {
                txtF = txtF + "55 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "P") {
                txtF = txtF + "56 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "Q") {
                txtF = txtF + "57 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "R") {
                txtF = txtF + "58 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "S") {
                txtF = txtF + "59 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "T") {
                txtF = txtF + "60 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "U") {
                txtF = txtF + "61 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "V") {
                txtF = txtF + "62 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "W") {
                txtF = txtF + "63 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "X") {
                txtF = txtF + "64 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "Y") {
                txtF = txtF + "65 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "Z") {
                txtF = txtF + "66 ";
                ab.innerHTML = txtF;
            }


            if (txtSeparado[i] == "a") {
                txtF = txtF + "61 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "b") {
                txtF = txtF + "62 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "c") {
                txtF = txtF + "63 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "d") {
                txtF = txtF + "64 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "e") {
                txtF = txtF + "65 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "f") {
                txtF = txtF + "66 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "g") {
                txtF = txtF + "67 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "h") {
                txtF = txtF + "68 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "i") {
                txtF = txtF + "69 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "j") {
                txtF = txtF + "70 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "k") {
                txtF = txtF + "71 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "l") {
                txtF = txtF + "72 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "m") {
                txtF = txtF + "73 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "n") {
                txtF = txtF + "74 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "o") {
                txtF = txtF + "75 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "p") {
                txtF = txtF + "76 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "q") {
                txtF = txtF + "77 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "r") {
                txtF = txtF + "78 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "s") {
                txtF = txtF + "79 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "t") {
                txtF = txtF + "80 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "u") {
                txtF = txtF + "81 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "v") {
                txtF = txtF + "82 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "w") {
                txtF = txtF + "83 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "x") {
                txtF = txtF + "84 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "y") {
                txtF = txtF + "85 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "z") {
                txtF = txtF + "86 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 0) {
                txtF = txtF + "30 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 1) {
                txtF = txtF + "31 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 2) {
                txtF = txtF + "32 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 3) {
                txtF = txtF + "33 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 4) {
                txtF = txtF + "34 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 5) {
                txtF = txtF + "35 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 6) {
                txtF = txtF + "36 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 7) {
                txtF = txtF + "37 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 8) {
                txtF = txtF + "38 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 9) {
                txtF = txtF + "39 ";
                ab.innerHTML = txtF;
            }
        }

    } else if (val === '3') {
        for (let i = 0; i <= tex.length; i++) {
            if (txtSeparado[i] == "A") {
                txtF = txtF + "01000001 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "B") {
                txtF = txtF + "01000010 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "C") {
                txtF = txtF + "01000011 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "D") {
                txtF = txtF + "01000100 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "E") {
                txtF = txtF + "01000101 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "F") {
                txtF = txtF + "01000110 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "G") {
                txtF = txtF + "01000111 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "H") {
                txtF = txtF + "01001000 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "I") {
                txtF = txtF + "01001001 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "J") {
                txtF = txtF + "01001010 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "K") {
                txtF = txtF + "01001011 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "L") {
                txtF = txtF + "01001100 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "M") {
                txtF = txtF + "01001101 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "N") {
                txtF = txtF + "01001110 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "O") {
                txtF = txtF + "01001111 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "P") {
                txtF = txtF + "01010000 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "Q") {
                txtF = txtF + "01010001 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "R") {
                txtF = txtF + "01010010 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "S") {
                txtF = txtF + "01010011 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "T") {
                txtF = txtF + "01010100 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "U") {
                txtF = txtF + "01010101 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "V") {
                txtF = txtF + "01010110 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "W") {
                txtF = txtF + "01010111 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "X") {
                txtF = txtF + "01011000 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "Y") {
                txtF = txtF + "01011001 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "Z") {
                txtF = txtF + "01011010 ";
                ab.innerHTML = txtF;
            }


            if (txtSeparado[i] == "a") {
                txtF = txtF + "01100001 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "b") {
                txtF = txtF + "01100010 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "c") {
                txtF = txtF + "01100011 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "d") {
                txtF = txtF + "01100100 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "e") {
                txtF = txtF + "01100101 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "f") {
                txtF = txtF + "01100110 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "g") {
                txtF = txtF + "01100111 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "h") {
                txtF = txtF + "01101000 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "i") {
                txtF = txtF + "01101001 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "j") {
                txtF = txtF + "01101010 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "k") {
                txtF = txtF + "01101011 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "l") {
                txtF = txtF + "01101100 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "m") {
                txtF = txtF + "01101101 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "n") {
                txtF = txtF + "01101110 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "o") {
                txtF = txtF + "01101111 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "p") {
                txtF = txtF + "01110000 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "q") {
                txtF = txtF + "01110001 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "r") {
                txtF = txtF + "01110010 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "s") {
                txtF = txtF + "01110011 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "t") {
                txtF = txtF + "01110100 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "u") {
                txtF = txtF + "01110101 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "v") {
                txtF = txtF + "01110110 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "w") {
                txtF = txtF + "01110111 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "x") {
                txtF = txtF + "01111000 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "y") {
                txtF = txtF + "01111001 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == "z") {
                txtF = txtF + "01111010 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 0) {
                txtF = txtF + "00110000 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 1) {
                txtF = txtF + "00110001 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 2) {
                txtF = txtF + "00110010 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 3) {
                txtF = txtF + "00110011 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 4) {
                txtF = txtF + "00110100 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 5) {
                txtF = txtF + "00110101 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 6) {
                txtF = txtF + "00110110 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 7) {
                txtF = txtF + "00110111 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 8) {
                txtF = txtF + "00111000 ";
                ab.innerHTML = txtF;
            } else if (txtSeparado[i] == 9) {
                txtF = txtF + "00111001 ";
                ab.innerHTML = txtF;
            }



        }

    }



};

document.addEventListener('keypress', function(e) {
    if (e.which == 13) {
        converter() ;{

        }
        // Verifica se o 'Enter' foi pressionado e executa a função;
    }
}, false);