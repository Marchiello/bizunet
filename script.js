window.addEventListener("DOMContentLoaded", () =>{

    let menuIcone = document.querySelector('#menuIcone')
    let menuOpcoes = document.querySelector('#menuDiv')
    let menuAtivado = true

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
    let armamento = document.getElementById("armamento")
    let cancoes = document.getElementById("cancoes")
    
    let opcaoFardamento = document.getElementById("1")
    let opcaoinstrucaoGeral = document.getElementById("2")
    let opcaoOrdemUnida = document.getElementById("3")
    let opcaoCfc = document.getElementById("4")
    let opcaoCampo = document.getElementById("5")
    let opcaoArmamento = document.getElementById("6")
    let opcaoCancoes = document.getElementById("7")

    let conteudos = [fardamento, instrucaoGeral, ordemUnida, cfc, campo, armamento, cancoes]

    let opcoes = [opcaoFardamento, opcaoinstrucaoGeral, opcaoOrdemUnida, opcaoCfc, opcaoCampo, opcaoArmamento, opcaoCancoes]

    function zerarConteudo(){
        for(let pos = 0; pos < opcoes.length ; pos++){
            conteudos[pos].style.display = 'none'
            opcoes[pos].style.borderBottom = 'none'
        }
    }
  
    // ---- "Ouvidores"

    // Da pra melhorar isso daqui e muito

    opcaoFardamento.addEventListener('click', () => {
        zerarConteudo()
        fardamento.style.display = 'flex'
        opcaoFardamento.style.borderBottom = 'solid 10px white'
    })

    opcaoinstrucaoGeral.addEventListener('click', () => {
        zerarConteudo()
        instrucaoGeral.style.display = 'flex'
        opcaoinstrucaoGeral.style.borderBottom = 'solid 10px white'
    })
    
    opcaoOrdemUnida.addEventListener('click', () => {
        zerarConteudo()
        ordemUnida.style.display = 'flex'
        opcaoOrdemUnida.style.borderBottom = 'solid 10px white'
    })
    
    opcaoCfc.addEventListener('click', () => {
        zerarConteudo()
        cfc.style.display = 'flex'
        opcaoCfc.style.borderBottom = 'solid 10px white'
    })
    
    opcaoCampo.addEventListener('click', () => {
        zerarConteudo()
        opcaoCampo.style.borderBottom = 'solid 10px white'
        campo.style.display = 'flex'
    })

    opcaoArmamento.addEventListener('click', () => {
        zerarConteudo()
        opcaoArmamento.style.borderBottom = 'solid 10px white'
        armamento.style.display = 'flex'
    })

    opcaoCancoes.addEventListener('click', () => {
        zerarConteudo()
        opcaoCancoes.style.borderBottom = 'solid 10px white'
        cancoes.style.display = 'flex'
    })
})
