document.getElementsByClassName("takeInput")[0].addEventListener("click",takeinput);

function takeinput(){
    var c = document.querySelector("input").value;
    console.log(c);
    var binary=Number(c).toString(2);
    var hexa=Number(c).toString(16);
    var octal=Number(c).toString(8);
    document.getElementsByClassName("answer")[0].innerText="Binary: "+binary;
    document.getElementsByClassName("answer")[1].innerText="HexaDecimal: "+hexa.toUpperCase();
    document.getElementsByClassName("answer")[2].innerText="Octal: "+octal;
}

// function answer1(c){
// }

// answer1(c);

