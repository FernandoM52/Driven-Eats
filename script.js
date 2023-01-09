function selecionarPrato(pratoSelecionado, tipo) {
    const validarPratoSelecionado = document.querySelector(`.${tipo} .ativo`);

    //verificar se ja tem algum prato selecionado
    if (validarPratoSelecionado !== null) {
        validarPratoSelecionado.classList.remove("ativo")
        validarPratoSelecionado.classList.remove("bordaSelecionado");
    }

    //inserir borda e check ao clicar no prato
    pratoSelecionado.classList.add("ativo");
    pratoSelecionado.classList.add("bordaSelecionado");
}