function selecionarPrato(itemSelecionado, tipo) {
    const validarPratoSelecionado = document.querySelector(`.${tipo} .ativo`);

    //verificar se ja tem algum item selecionado
    if (validarPratoSelecionado !== null) {
        validarPratoSelecionado.classList.remove("ativo")
        validarPratoSelecionado.classList.remove("bordaSelecionado");
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
function fecharPedido() {
    let mensagem = "Olá, gostaria de fazer o pedido:\n"
    mensagem += "-Prato: "

    let link = "https://wa.me/5531988262221?text=urlencodedtext";
}

