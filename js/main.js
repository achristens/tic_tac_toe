document.addEventListener('DOMContentLoaded', function() {

  var cell = document.querySelectorAll('td');
  var board = document.querySelector('table');
  var count = 1;

  board.addEventListener('click', function(e){
      if (count % 2 === 0) {
        e.target.innerText = "X";
        count ++;
      } else {
        e.target.innerText = "O";
        count ++;
      }
  });
});
