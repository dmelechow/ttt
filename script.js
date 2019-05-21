var restart = document.querySelector("#button-restart");

var squares = document.querySelectorAll('td');

function clearBoard(){
  for (var i = 0; i < squares.length; i++){
    squares[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard);

for (var i = 0; i < squares.length; i++){
  squares[i].addEventListener('click', changeMarker);
}

function changeMarker(){
  if(this.textContent === ''){
    this.textContent = 'X';
  } else if(this.textContent === 'X'){
    this.textContent = 'O';
  } else {
    this.textContent = '';
  }
}
