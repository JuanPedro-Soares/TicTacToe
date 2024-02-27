const squares = document.querySelectorAll(".espaco");
const mesa = document.querySelector(".mesa");
const square = Array.from(squares);
const vitoria = document.querySelector('.vitoria')
const clear = document.getElementById('clear');
const placarx = document.querySelector('.placar .pontosx');
const placaro = document.querySelector('.placar .pontoso');
const empates = document.querySelector('.placar .ties');
const resetarplacar = document.getElementById('clearplacar')
let placarNumberx=0
let placarNumberTie=0
let placarNumberO=0
let variavelcontrole = 1;

resetarplacar.addEventListener('click',resetplacar)
clear.addEventListener('click',handleClick)

function resetplacar(){
   placarNumberx=0
   placarNumberTie=0
   placarNumberO=0
   placarx.innerText=0;
   placaro.innerText=0;
   empates.innerText=0;
}

function handleClick(event){
  event.preventDefault();    
      if(!VerificarVitoria(Jogador))
      removeClass(square)
}
function removeClass(square){
  square.forEach((element)=>{
    element.classList.remove('X')
    element.classList.remove('O')
    variavelcontrole = 1;
    vitoria.innerText=`TURN ${Jogador}`
  })
}

let Jogador = "X";

function alternarJogador() {
  if (Jogador === "X") {
    Jogador = "O";
    vitoria.innerText=`TURN ${Jogador}`
  } else {
    Jogador = "X";
    vitoria.innerText=`TURN ${Jogador}`
  }
}
function adicionar(event) {
  const clique = event.target;
  if (!clique.classList.contains("X") && !clique.classList.contains("O")) {
    clique.classList.add(Jogador);
    if(VerificarVitoria(Jogador)){
      vitoria.innerText=(Jogador +" wins!")
      setTimeout(() => {
        removeClass(square);
      }, 2000);
        if(Jogador==='X'){
          placarNumberx=placarNumberx+variavelcontrole;
          placarx.innerText=placarNumberx;
          variavelcontrole=0;
        }
        else{
          placarNumberO=placarNumberO+variavelcontrole;
          placaro.innerText=placarNumberO;
          variavelcontrole=0;
        }
    }
    else{
      let verificacao=0
      for (let index = 0; index < square.length; index++) {
        if(square[index].classList.contains('X') || square[index].classList.contains('O')){
          verificacao++;
        };    
      }
      if(verificacao>=9){
        placarNumberTie=placarNumberTie+variavelcontrole;
          empates.innerText=placarNumberTie;
          vitoria.innerText=("Tie!")
          setTimeout(() => {
            removeClass(square);
          }, 2000);
      }
      else{
    alternarJogador();
      }
    }
  }
}

square.forEach((element) => {
  element.addEventListener("click", adicionar);
});
function VerificarVitoria(jogador) {
 const linhasVitoria=[
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticais
  [0, 4, 8], [2, 4, 6]              // Diagonais
 ]
 for(let linha of linhasVitoria){
  const [a, b, c]=linha;
  if(square[a].classList.contains(jogador) &&
  square[b].classList.contains(jogador) &&
  square[c].classList.contains(jogador)) {
    
  return true;
 }
}
return false;
}

