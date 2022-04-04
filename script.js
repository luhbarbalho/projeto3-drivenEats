let prato = "";
let precoDoPrato = 0;
let bebida = "";
let precoDaBebida = 0;
let sobremesa = "";
let precoDaSobremesa = 0;
let escolhaVazia;
let realizarPedido;
let aviso;
let botao;
let total = 0;
let confirmacao;


function opcaoprato(elemento) {

    prato = document.querySelector(".pratos");

    escolhaVazia = prato.querySelector(".selecionado")
    if (escolhaVazia !== null) {
        escolhaVazia.classList.remove("selecionado");
        
    }
    elemento.classList.add("selecionado");

    ativarBotao()
}

function opcaobebida(elemento) {

    bebida = document.querySelector(".bebidas");

    escolhaVazia = bebida.querySelector(".selecionado2")
    if (escolhaVazia !== null) {
        escolhaVazia.classList.remove("selecionado2");

    }
    elemento.classList.add("selecionado2");

    ativarBotao()
}

function opcaosobremesa(elemento) {

    sobremesa = document.querySelector(".sobremesas");

    escolhaVazia = sobremesa.querySelector(".selecionado3")
    if (escolhaVazia !== null) {
        escolhaVazia.classList.remove("selecionado3");
    }
    elemento.classList.add("selecionado3");
    
    ativarBotao()

}

function ativarBotao() {
    botao = document.querySelector(".inferior")
        if (prato !== "" && bebida !== "" && sobremesa !== "") {
        botao.classList.add("checkout");
        aviso = document.querySelector(".inferior button");
        aviso.innerHTML = "Tudo certo, pode pedir!";
        }
}


function pedirCerteza() {
    const mensagemWhatsapp = `
    Olá, gostaria de fazer o pedido:
    - Prato: Sanduiche bacon
    - Bebida: Suco de laranja
    - Sobremesa: Torta de morango
    Total: R$ 10.50
    `
    window.open(`https://wa.me/5581987479989?text=${encodeURIComponent(mensagemWhatsapp)}`);
}


function finalizarPedido() {
    if (prato != "" && bebida != "" && sobremesa != ""){
        total = precoDoPrato + precoDaBebida + precoDaSobremesa;
        confirmacao = document.querySelector(".confirmacao");
        confirmacao.classList.remove("invisivel");

        let escolha1 = document.querySelector(".escolhaPrato");
        let preco1 = document.querySelector(".precoPrato");

        let escolha2 = document.querySelector(".escolhaBebida");
        let preco2 = document.querySelector(".precoBebida");

        let escolha3 = document.querySelector(".escolhaSobremesa");
        let preco3 = document.querySelector(".precoSobremesa");

        escolha1.innerHTML = "Sanduiche bacon";
        escolha2.innerHTML = "Suco de laranja";
        escolha3.innerHTML = "Torta de morango";

        preco1.innerHTML = "R$ 16.40";
        preco2.innerHTML = "R$ 7.90";
        preco3.innerHTML = "R$ 10.50";
    }
}

function cancelarPedido() {
    const cancelar = document.querySelector(".confirmacao");
    cancelar.classList.toggle("invisivel");
}
