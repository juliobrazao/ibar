// função que controla a barra de Status
const barraStatus = document.getElementById("status");
barraStatus.innerHTML = "Combo selecionado!";

function exibeStatus(){
    barraStatus.style.display="block";
}

// função que intera com a escolha do pedido do combo 01
function finalizaCompra(){
    var segundoItem = document.getElementsByTagName("article")[1];
    var botaoAcao = document.getElementsByTagName("button")[0];
    var divisor = document.getElementsByTagName("span")[0];

    botaoAcao.innerHTML="Finalizar Compra";
    segundoItem.style.display="none";
    divisor.style.display="none";

    exibeStatus();
}