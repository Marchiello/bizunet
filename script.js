window.addEventListener("DOMContentLoaded", () =>{

    let menuIcone = document.querySelector('#menu');
    let menuOpcoes = document.querySelector('#opcoes');
    let menuAtivado = true;
    
    console.log("Funcionando!")
    
    menuIcone.addEventListener('click', () => {
        if(menuAtivado){
            menuOpcoes.style.display = "flex";
        } else{
            menuOpcoes.style.display = "none";
        }
        menuAtivado = !menuAtivado;
    })

})
