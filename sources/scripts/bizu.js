function ObterParametro(nome){
    const parametroURL = new URLSearchParams(window.location.search);

    return parametroURL.get(nome)
}

window.onload = function(){
    const secao = ObterParametro('section')

    if(secao){
        const exibirParte = document.getElementById(secao)

        if(exibirParte){
            exibirParte.style.display = 'flex'
        }
    }

}

let HinoNacional = document.getElementById("#hinoNacional");
let Cancao = document.getElementsByClassName("cancao");


