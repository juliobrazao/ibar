function finalizaCompra(){
    var segundoItem = document.getElementsByTagName("article")[1];
    var botaoAcao = document.getElementsByTagName("button")[0];
    var divisor = document.getElementsByTagName("span")[0];

    botaoAcao.innerHTML="Finalizar Compra";
    segundoItem.style.display="none";
    divisor.style.display="none";

}