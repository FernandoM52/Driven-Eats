function selecionarPrato(pratoSelecionado) {
    const validarPratoSelecionado = document.querySelector(".ativo");
    //verificar se ja tem algum prato selecionado
    if (validarPratoSelecionado !== null) {
        validarPratoSelecionado.classList.remove("ativo")
        validarPratoSelecionado.classList.remove("bordaSelecionado");
    }

    //inserir borda e checl ao clicar no prato
    pratoSelecionado.classList.add("ativo");
    pratoSelecionado.classList.add("bordaSelecionado");
}