
var gamePage = 'app.html'
var mainPage = 'index.html'

function startGame(){
    var level = document.getElementById('level').value
    if(level == ''){
        alert('Selecione um nível!')
        return false;
    }
    window.location.href = 'app.html?' + level
}

function playAgain(){
    window.location.href = mainPage
}