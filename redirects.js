
var gamePage = 'app.html'
var mainPage = 'index.html'

function startGame(){
    var level = document.getElementById('level').value
    if(level == ''){
        alert('Selecione um nível!')
        return false;
    }
    alert(level)
}

function playAgain(){
    window.location.href = 'app.html'
}