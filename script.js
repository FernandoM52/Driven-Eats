function selecionarPrato(itemSelecionado, tipo) {
    console.log(itemSelecionado, tipo);

    const validarItemSelecionado = document.querySelector(`.${tipo} .ativo`);

    //verificar se ja tem algum item selecionado
    if (validarItemSelecionado !== null) {
        validarItemSelecionado.classList.remove("ativo")
        validarItemSelecionado.classList.remove("bordaSelecionado");
    }

    //inserir borda e check ao clicar no item
    itemSelecionado.classList.add("ativo");
    itemSelecionado.classList.add("bordaSelecionado");


    habilitaBotaoFecharPedido();
}

//função que habilitae altera o botao de fechar pedido
function habilitaBotaoFecharPedido() {
    const habilitarBotao = document.querySelector('.botao')

    if (document.querySelectorAll('.ativo').length === 3) {
        habilitarBotao.removeAttribute('disabled');
        habilitarBotao.classList.add('botaoHabilitado');
        habilitarBotao.innerHTML = "Fechar pedido";
    }
}


//função da mensagem do wpp
function fecharPedido(itemSelecionado) {
    const prato = document.querySelector('.prato');
    const bebida = document.querySelector('.bebida');
    const sobremesa = document.querySelector('.sobremesa');




    let mensagem = "Olá, gostaria de fazer o pedido:\n"
    mensagem += "-Prato: " + prato.getElementByClassName("teste")[0].innerHTML + "\n"
    mensagem += "-Bebida: " + bebida.getElementByClassName("teste")[0].innerHTML + "\n"
    mensagem += "-Sobremesa: " + sobremesa.getElementByClassName("teste")[0].innerHTML + "\n"

    let comidaPreco = Number(prato.getElementByClassName("preco")[0].children[0].innerHTML.replace('R$', '').replace(",", ","));
    let bebidaPreco = Number(bebida.getElementByClassName("preco")[0].children[0].innerHTML.replace('R$', '').replace(",", ","));
    let sobremesaPreco = Number(sobremesa.getElementByClassName("preco")[0].children[0].innerHTML.replace('R$', '').replace(",", ","));
    let precoTotal = comidaPreco + bebidaPreco + sobremesaPreco;

    mensagem += "Total: R$ " + precoTotal.toFixed(2);

    let mensagemFormatada = encodeURIComponent(mensagem);

    const url = "https://wa.me/?text=" + mensagemFormatada;
    window.open(url);
}

