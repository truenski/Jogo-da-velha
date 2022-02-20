document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })
   
})


function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        updateSquares();
        setTimeout(() => {
            
            alert("Game Over para " + symbols[playerTime]+ "!!" );
            jogarDenovo();
        }, 10);
    };
    updateSquares();

}

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != "") {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

//13:26
//cria button html
//cria função interface iniciar novo jogo

//pega variáveis e bota no para o estado inicial
// board playertime gameOver 
function jogarDenovo() {
    
    var resultado = confirm("Deseja Jogar novamente?" );
    if (resultado == true) {
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];
        square.innerHTML = "";
        
    })
;
        alert("Novo Jogo Iniciado.");
    }
    else {
        alert("Obrigado por jogar!");
    }
}

