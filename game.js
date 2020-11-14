
var altura = 0
var largura = 0

var posicaoX = 0
var posicaoY = 0

function ajustaTamanhoJogo(){
     altura = window.innerHeight 
     largura = window.innerWidth
}

ajustaTamanhoJogo()

function randomPosition(){

    //recebendo valores randomicos com base no tamanho da tela
    posicaoX = Math.round(Math.random() * largura) - 90 
    posicaoY = Math.round(Math.random() * altura) - 90 
    //subtraindo para evitar barra de rolagem devido ao tamanho da imagem

    //controlador para caso o valor seja 0 não suma da página devido ao -90
    posicaoX = posicaoX < 0 ? 0:posicaoX
    posicaoY = posicaoY < 0 ? 0:posicaoY

    //Criando elemento img e posicionando no body
    var mosquito = document.createElement('img')
    mosquito.src = 'image/mosca.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

}