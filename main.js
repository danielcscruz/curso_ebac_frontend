
const formCampoA = document.getElementById("campoA");
const formCampoB = document.getElementById("campoB");
const msgA = document.getElementById("msgA");
const msgB = document.getElementById("msgB");
const botao = document.querySelector("button");

formCampoA.addEventListener("input", function(e) {
    const value = e.target.value;
    const numberValue = parseInt(value);
    if (isNaN(numberValue)) {
        msgA.innerHTML = "não é número";
        formCampoA.style.borderBottom = "2px solid red"
        desativarBotao();

    } else {
        msgA.innerHTML = "";
        formCampoA.style.borderBottom = "2px solid #282828"
        compararNumeros();
        }
});

formCampoB.addEventListener("input", function(e) {
    const value = e.target.value;
    const numberValue = parseInt(value);
    if (isNaN(numberValue)) {
        msgB.innerHTML = "não é número";
        formCampoB.style.borderBottom = "2px solid red"
        desativarBotao();

    } else {
        msgB.innerHTML = "";
        formCampoB.style.borderBottom = "2px solid #282828"
        compararNumeros();
    }
});

function desativarBotao(){
    botao.disabled = true;
    console.log("desativou o botão"); 

}
function compararNumeros() { 
    if (parseInt(formCampoB.value) > parseInt(formCampoA.value)) {
        botao.disabled = false;
        console.log("ativou o botão");
    } else {
        desativarBotao();
    }

}

botao.addEventListener("click", function() {
    alert("Número B é maior do que número A");
});