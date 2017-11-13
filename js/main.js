document.addEventListener('DOMContentLoaded', function() {

  var cell = document.querySelectorAll('td');
  var board = document.querySelector('table');
  var count = 1;

  board.addEventListener('click', function(e){
      if (count % 2 === 0 && e.target.innerText === "") {
        e.target.innerText = "X";
        count ++;
      } else if (e.target.innerText === ""){
        e.target.innerText = "O";
        count ++;
      }
  });
});
