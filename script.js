window.addEventListener("DOMContentLoaded", () =>{

    let menuIcone = document.querySelector('#menuIcone');
    let menuOpcoes = document.querySelector('#menuDiv');
    let menuAtivado = true;
    let camuflado = document.querySelector('#camuflado')


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
