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

    // ------------------------------ Bizus

    let fardamento = document.getElementById("fardamento")
    let instrucaoGeral = document.getElementById("instrucaoGeral")
    let ordemUnida = document.getElementById("ordemUnida")
    let cfc = document.getElementById("cfc")
    let campo = document.getElementById("campo")
    
    let opcaoFardamento = document.getElementById("1")
    let opcaoinstrucaoGeral = document.getElementById("2")
    let opcaoOrdemUnida = document.getElementById("3")
    let opcaoCfc = document.getElementById("4")
    let opcaoCampo = document.getElementById("5")
    // let conteudosHTML = document.getElementsByClassName('conteudo')

    let conteudos = [fardamento, instrucaoGeral, ordemUnida, cfc, campo]

    let opcoes = [opcaoFardamento, opcaoinstrucaoGeral, opcaoOrdemUnida, opcaoCfc, opcaoCampo]

  
    // ---- "Ouvidores"

    // Da pra melhorar isso daqui e muito

    opcaoFardamento.addEventListener('click', () => {
        for(let pos = 1; pos <= 4; pos++){
            console.log(conteudos[pos])
            conteudos[pos].style.display = 'none'
            opcoes[pos].style.borderBottom = 'none'
        }
        fardamento.style.display = 'flex'
        opcaoFardamento.style.borderBottom = 'solid 10px white'
    })

    opcaoinstrucaoGeral.addEventListener('click', () => {
        for(let pos = 0; pos <= 4; pos++){
            console.log(conteudos[pos])
            conteudos[pos].style.display = 'none'
            opcoes[pos].style.borderBottom = 'none'
        }
        instrucaoGeral.style.display = 'flex'
        opcaoinstrucaoGeral.style.borderBottom = 'solid 10px white'
    })
    
    opcaoOrdemUnida.addEventListener('click', () => {
        for(let pos = 0; pos <= 4; pos++){
            console.log(conteudos[pos])
            conteudos[pos].style.display = 'none'
            opcoes[pos].style.borderBottom = 'none'
        }
        ordemUnida.style.display = 'flex'
        opcaoOrdemUnida.style.borderBottom = 'solid 10px white'
    })
    
    opcaoCfc.addEventListener('click', () => {
        for(let pos = 0; pos <= 4; pos++){
            console.log(conteudos[pos])
            conteudos[pos].style.display = 'none'
            opcoes[pos].style.borderBottom = 'none'
        }
        cfc.style.display = 'flex'
        opcaoCfc.style.borderBottom = 'solid 10px white'
    })
    
    opcaoCampo.addEventListener('click', () => {
        for(let pos = 0; pos <= 4; pos++){
            console.log(conteudos[pos])
            conteudos[pos].style.display = 'none'
            opcoes[pos].style.borderBottom = 'none'
        }
        opcaoCampo.style.borderBottom = 'solid 10px white'
        campo.style.display = 'flex'
        opcaoCampo.style.borderBottom = 'solid 10px white'
    })
    
})
