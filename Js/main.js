const controle = document.querySelectorAll(".controle-ajuste");

 controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados  (evento.target.textContent, evento.target.parentNode)
       
    })
 });




function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('.controle-contador');
    if(operacao === "subtrair") {
        peca.value = parseInt(braco.value) - 1
    } else {
        peca.value = parseInt(braco.value) + 1
    }
};

//fazendo commit

