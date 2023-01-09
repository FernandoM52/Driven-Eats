function selecionarPrato(pratoSelecionado) {

    const verificaPratoSelecionado = document.querySelector('.pratos .bordaSelecionado');
    console.log(verificaPratoSelecionado);

    if (verificaPratoSelecionado !== null) {
        verificaPratoSelecionado.classList.remove('bordaSelecionado');
    }

    pratoSelecionado.classList.add('bordaSelecionado');

}