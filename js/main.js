document.addEventListener('DOMContentLoaded', function() {

  var cells   = document.querySelectorAll('td');
  var rows   = document.querySelectorAll('tr');
  var board  = document.querySelector('table');
  var cellOne = document.querySelector('#one');
  var cellTwo = document.querySelector('#two');
  var cellThree = document.querySelector('#three');
  var cellFour = document.querySelector('#four');
  var cellFive = document.querySelector('#five');
  var cellSix = document.querySelector('#six');
  var cellSeven = document.querySelector('#seven');
  var cellEight = document.querySelector('#eight');
  var cellNine = document.querySelector('#nine');
  var reset = document.querySelector('#reset');

  var count  = 1;
  var xCount = 0;
  var oCount = 0;

  board.addEventListener('click', function(e){
    if (count % 2 === 0 && e.target.innerText === "") {
      e.target.innerText = "X";
      xCount ++;
      count ++;
    } else if (e.target.innerText === ""){
      e.target.innerText = "O";
      oCount ++;
      count ++;
    }
    checkScore();
  });

  reset.addEventListener('click', function(){
    cells.forEach(function(cell){
      cell.innerText = "";
    })
  });

  function checkScore(){
    if (cellOne.innerText === cellTwo.innerText && cellOne.innerText === cellThree.innerText && cellOne.innerText !== ""){
      var char = cellOne.innerText;
      window.alert("The " + char + " player is the winner!")
    } else if (cellOne.innerText === cellFour.innerText && cellOne.innerText === cellSeven.innerText && cellOne.innerText !== ""){
      var char = cellOne.innerText;
      window.alert("The " + char + " player is the winner!")
    } else if (cellFour.innerText === cellFive.innerText && cellFour.innerText === cellSix.innerText && cellFour.innerText !== ""){
      var char = cellFour.innerText;
      window.alert("The " + char + " player is the winner!")
    } else if (cellSeven.innerText === cellEight.innerText && cellSeven.innerText === cellNine.innerText && cellSeven.innerText !== ""){
      var char = cellSeven.innerText;
      window.alert("The " + char + " player is the winner!")
    } else if (cellTwo.innerText === cellFive.innerText && cellTwo.innerText === cellEight.innerText && cellTwo.innerText !== ""){
      var char = cellTwo.innerText;
      window.alert("The " + char + " player is the winner!")
    } else if (cellThree.innerText === cellSix.innerText && cellThree.innerText === cellNine.innerText && cellThree.innerText !== ""){
      var char = cellThree.innerText;
      window.alert("The " + char + " player is the winner!")
    } else if (cellOne.innerText === cellFive.innerText && cellOne.innerText === cellNine.innerText && cellOne.innerText !== ""){
      var char = cellOne.innerText;
      window.alert("The " + char + " player is the winner!")
    } else if (cellThree.innerText === cellFive.innerText && cellThree.innerText === cellSeven.innerText && cellThree.innerText !== ""){
      var char = cellOne.innerText;
      window.alert("The " + char + " player is the winner!")
    } else if (oCount + xCount === 9){
      window.alert("It's a draw!");
    }
  }


});
