// Generating random table

// For picking a random number between two numbers
function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// For picking 25 random numbers betwen 1-9 and putting it in an array
function createRandomGrid(){
  var randGrid = [];
  for (var i = 0; i < 25; i++) {
    randGrid.push(randBetween(1,9));
  }
  return randGrid;
}

// For replacing the existing inside values with the randomly generated values
function replaceInside(newGrid) {
  var insideNumber = document.getElementsByClassName('inside');
  for (var i = 0; i < newGrid.length; i++) {
    insideNumber[i].innerHTML = newGrid[i];
  }
  return insideNumber;
}

// Call replaceInside() to change the numbers in the 5x5
var insideFinal = replaceInside(createRandomGrid());

// For randomly removing numbers for the outsideAim
function removeAtRandom() {
  var columnArrays = getColumnArrays(); // To get the array of arrays of columns
  for (var i = 0; i < columnArrays.length; i++) { //loop for each array
    var n = randBetween(1,4); // To get the number of numbers to be removed
    for (j = 0; j < n; j++) { // loop for elements of the inside array
      var m = randBetween(0,4); // To get the index of array to be removed
      columnArrays[i][m] = 0;
    }
  }
  return columnArrays;
}

// For getting the sum of the new arrays to create outsideAim
function getOutsideAim() {
  // Variable for the outside-sum (outermost cells / array of 20 elements)
  var outsideAim = document.getElementsByClassName('outside-aim');
  var callRemoveAtRandom = removeAtRandom();
  console.log(callRemoveAtRandom);
  // sum for top outsideAim (row 2 of 9x9 / first 5 elements)
  for (var i = 0; i < outsideAim.length/4; i++) {
    outsideAim[i].innerHTML = callRemoveAtRandom[i].reduce(function(a, b) {
      return a + b;
    });
  }
  // sum for left outsideAim (column 2 of 9x9 / next 5 elements with increment of 2)
  var i,j;
  for (i = 5, j = 0; i < outsideAim.length*3/4, j < 5; i+=2, j++) {
    removeAtRandomRow = math.transpose(callRemoveAtRandom);
    outsideAim[i].innerHTML = removeAtRandomRow[j].reduce(function(a, b) {
      return a + b;
    });
  }
  // sum for bottom outsideAim (row 8 of 9x9)
  outsideAim[15].innerHTML = outsideAim[0].innerHTML;
  outsideAim[16].innerHTML = outsideAim[1].innerHTML;
  outsideAim[17].innerHTML = outsideAim[2].innerHTML;
  outsideAim[18].innerHTML = outsideAim[3].innerHTML;
  outsideAim[19].innerHTML = outsideAim[4].innerHTML;
  // sum for right outsideAim (column 8 of 9x9)
  outsideAim[6].innerHTML = outsideAim[5].innerHTML;
  outsideAim[8].innerHTML = outsideAim[7].innerHTML;
  outsideAim[10].innerHTML = outsideAim[9].innerHTML;
  outsideAim[12].innerHTML = outsideAim[11].innerHTML;
  outsideAim[14].innerHTML = outsideAim[13].innerHTML;
  return outsideAim;
}

// Call getOutsideAim() to generate a problem with right answer
getOutsideAim();
// Generating table end

// For making an array of column arrays
function getColumnArrays(){
  // Each column as array of integers
  var colOne = [];
  var col1 = document.getElementsByClassName('col-1');
  for(var i = 0; i < 5; i++){
    if (col1[i].classList.contains('inside-deselect')) {
      colOne.push(0);
    }else {
      colOne.push(parseInt(col1[i].innerHTML));
    }
  }
  var colTwo = [];
  var col2 = document.getElementsByClassName('col-2');
  for(var i = 0; i < 5; i++){
    if (col2[i].classList.contains('inside-deselect')) {
      colTwo.push(0);
    }else {
      colTwo.push(parseInt(col2[i].innerHTML));
    }
  }
  var colThree = [];
  var col3 = document.getElementsByClassName('col-3');
  for(var i = 0; i < 5; i++){
    if (col3[i].classList.contains('inside-deselect')) {
      colThree.push(0);
    }else {
      colThree.push(parseInt(col3[i].innerHTML));
    }
  }
  var colFour = [];
  var col4 = document.getElementsByClassName('col-4');
  for(var i = 0; i < 5; i++){
    if (col4[i].classList.contains('inside-deselect')) {
      colFour.push(0);
    }else {
      colFour.push(parseInt(col4[i].innerHTML));
    }
  }
  var colFive = [];
  var col5 = document.getElementsByClassName('col-5');
  for(var i = 0; i < 5; i++){
    if (col5[i].classList.contains('inside-deselect')) {
      colFive.push(0);
    }else {
      colFive.push(parseInt(col5[i].innerHTML));
    }
  }
  var colNumbers = [colOne, colTwo, colThree, colFour, colFive];
  return colNumbers;
}

// For making an array of row arrays
function getRowArrays(){
  // Each row as array of integers
  var rowOne = [];
  var row1 = document.getElementsByClassName('row-1');
  for(var i = 0; i < 5; i++){
    if (row1[i].classList.contains('inside-deselect')) {
      rowOne.push(0);
    }else {
      rowOne.push(parseInt(row1[i].innerHTML));
    }
  }
  var rowTwo = [];
  var row2 = document.getElementsByClassName('row-2');
  for(var i = 0; i < 5; i++){
    if (row2[i].classList.contains('inside-deselect')) {
      rowTwo.push(0);
    }else {
      rowTwo.push(parseInt(row2[i].innerHTML));
    }
  }
  var rowThree = [];
  var row3 = document.getElementsByClassName('row-3');
  for(var i = 0; i < 5; i++){
    if (row3[i].classList.contains('inside-deselect')) {
      rowThree.push(0);
    }else {
      rowThree.push(parseInt(row3[i].innerHTML));
    }
  }
  var rowFour = [];
  var row4 = document.getElementsByClassName('row-4');
  for(var i = 0; i < 5; i++){
    if (row4[i].classList.contains('inside-deselect')) {
      rowFour.push(0);
    }else {
      rowFour.push(parseInt(row4[i].innerHTML));
    }
  }
  var rowFive = [];
  var row5 = document.getElementsByClassName('row-5');
  for(var i = 0; i < 5; i++){
    if (row5[i].classList.contains('inside-deselect')) {
      rowFive.push(0);
    }else {
      rowFive.push(parseInt(row5[i].innerHTML));
    }
  }
  var rowNumbers = [rowOne, rowTwo, rowThree, rowFour, rowFive];
  return rowNumbers;
}

// For getting the outermost value of current sum
function getOutsideSum(){
  // Variable for the outside-sum (outermost cells / array of 20 elements)
  var outsideSum = document.getElementsByClassName('outside-sum');
  // sum for top outsideSum (row 1 of 9x9 / first 5 elements)
  for (var i = 0; i < outsideSum.length/4; i++) {
    outsideSum[i].innerHTML = getColumnArrays()[i].reduce(function(a, b) { return a + b; });
  }
  // sum for left outsideSum (column 1 of 9x9 / next 5 elements with increment of 2)
  var i,j;
  for (i = 5, j = 0; i < outsideSum.length*3/4, j < 5; i+=2, j++) {
    outsideSum[i].innerHTML = getRowArrays()[j].reduce(function(a, b) { return a + b; });
  }
  // sum for bottom outsideSum (row 9 of 9x9)
  outsideSum[15].innerHTML = outsideSum[0].innerHTML;
  outsideSum[16].innerHTML = outsideSum[1].innerHTML;
  outsideSum[17].innerHTML = outsideSum[2].innerHTML;
  outsideSum[18].innerHTML = outsideSum[3].innerHTML;
  outsideSum[19].innerHTML = outsideSum[4].innerHTML;
  // sum for right outsideSum (column 9 of 9x9)
  outsideSum[6].innerHTML = outsideSum[5].innerHTML;
  outsideSum[8].innerHTML = outsideSum[7].innerHTML;
  outsideSum[10].innerHTML = outsideSum[9].innerHTML;
  outsideSum[12].innerHTML = outsideSum[11].innerHTML;
  outsideSum[14].innerHTML = outsideSum[13].innerHTML;
  return outsideSum;
}

// Selecting/Deselecting inside numbers
function insideClick(){
  // Inside 5x5 cells with 25 elements
  var insideNumber = document.getElementsByClassName('inside');
  for (var i = 0; i < insideNumber.length; i++) {
    insideNumber[i].addEventListener('click', function(event){
      var audio = document.getElementById('selectAudio');
      audio.play();
      if (this.classList.contains('inside-deselect')) { //select
        this.classList.remove('inside-deselect');
      }else{ //deselect
        this.classList.add('inside-deselect');
      }
      var x = getOutsideSum();
      outsideCheck(x);
      winCondition();
    });
  }
}

var outsideAim = document.getElementsByClassName('outside-aim');
// Checking if equal
function outsideCheck(lastOutsideSum){
  for (var i = 0; i < outsideAim.length; i++) {
    if (outsideAim[i].innerHTML == lastOutsideSum[i].innerHTML) {
      outsideAim[i].classList.add('outside-solved');
    }else{
      outsideAim[i].classList.remove('outside-solved');
    }
  }
}

// Checking if all sums are equal to all aims
function winCondition(){
  if (outsideAim[0].classList.contains('outside-solved') && outsideAim[1].classList.contains('outside-solved') && outsideAim[2].classList.contains('outside-solved') && outsideAim[3].classList.contains('outside-solved') && outsideAim[4].classList.contains('outside-solved') && outsideAim[5].classList.contains('outside-solved') && outsideAim[7].classList.contains('outside-solved') && outsideAim[9].classList.contains('outside-solved') && outsideAim[11].classList.contains('outside-solved') && outsideAim[13].classList.contains('outside-solved') && outsideAim[15].classList.contains('outside-solved')) {
    $(function() {
      $("#winDialog").show();
    });
    $("#newGame").click(function(){
      location.reload();
    });
  }
}

// Start button click
function startGame(){
  $("#startButton").click(function(){
    $("#startGame").hide();
  });
}

// Ordering of functions after table generation
function order(){
  startGame();
  getOutsideSum();
  insideClick();
}
order();
