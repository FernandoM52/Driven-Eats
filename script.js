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

    //função valida botao de fechar pedido
    habilitaBotaoFecharPedido();
}

function habilitaBotaoFecharPedido() {
    const botao = document.querySelector('footer .botao');
    if (document.querySelectorAll('.ativo').length === 3) {
        botao.disabled = false;
        botao.classList.add('botaoHabilitado');
        botao.innerHTML = "Fechar pedido";
    }
}

