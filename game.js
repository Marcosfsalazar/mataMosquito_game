
var altura = 0
var largura = 0

var posicaoX = 0
var posicaoY = 0

var vida = 0

var tempo = 15


function ajustaTamanhoJogo(){
     altura = window.innerHeight 
     largura = window.innerWidth
}

ajustaTamanhoJogo()

var cronometro = setInterval(() => {
    tempo -= 1
    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'chicken_dinner.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo //inserindo o tempo entre a tag (innerHTML)
    }

}, 1000);

function randomPosition(){


    //removendo o mosquito antes de colocar um novo
    if(document.getElementById('mosquito') != null){
        document.getElementById('mosquito').remove()

        if(vida < 3){
            document.getElementById('vida'+(++vida)).setAttribute('src','image/coracao_vazio.png')
        }else if(vida >= 3){
            window.location.href='game_over.html'
        }

    }

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
    mosquito.className = randomSize() + ' ' +randomSide()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

}

function randomSize(){
    var classe = Math.floor(Math.random()*3);
    
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }   
}

function randomSide(){
    
    var classe = Math.floor(Math.random()*2)
    
    switch(classe){
        case 1:
            return 'ladoB'
    }   
}