
// Each column as array of integers
var colOne = [];
for(var i = 0; i < 5; i++){
  colOne.push(parseInt(document.getElementsByClassName('col-1')[i].innerHTML));
}
var colTwo = [];
for(var i = 0; i < 5; i++){
  colTwo.push(parseInt(document.getElementsByClassName('col-2')[i].innerHTML));
}
var colThree = [];
for(var i = 0; i < 5; i++){
  colThree.push(parseInt(document.getElementsByClassName('col-3')[i].innerHTML));
}
var colFour = [];
for(var i = 0; i < 5; i++){
  colFour.push(parseInt(document.getElementsByClassName('col-4')[i].innerHTML));
}
var colFive = [];
for(var i = 0; i < 5; i++){
  colFive.push(parseInt(document.getElementsByClassName('col-5')[i].innerHTML));
}
var colNumber = [colOne, colTwo, colThree, colFour, colFive];

// Each row as array of integers
var rowOne = [];
for(var i = 0; i < 5; i++){
  rowOne.push(parseInt(document.getElementsByClassName('row-1')[i].innerHTML));
}
var rowTwo = [];
for(var i = 0; i < 5; i++){
  rowTwo.push(parseInt(document.getElementsByClassName('row-2')[i].innerHTML));
}
var rowThree = [];
for(var i = 0; i < 5; i++){
  rowThree.push(parseInt(document.getElementsByClassName('row-3')[i].innerHTML));
}
var rowFour = [];
for(var i = 0; i < 5; i++){
  rowFour.push(parseInt(document.getElementsByClassName('row-4')[i].innerHTML));
}
var rowFive = [];
for(var i = 0; i < 5; i++){
  rowFive.push(parseInt(document.getElementsByClassName('row-5')[i].innerHTML));
}
var rowNumber = [rowOne, rowTwo, rowThree, rowFour, rowFive];

// Variable for the outside-sum (outermost cells)
var outsideSum = document.getElementsByClassName('outside-sum');

// sum for top outsideSum (row 1 of 9x9)
for (var i = 0; i < outsideSum.length/4; i++) {
  outsideSum[i].innerHTML = colNumber[i].reduce(function(a, b) { return a + b; });
}

// sum for left outsideSum (column 1 of 9x9)
var i,j;
for (i = 5, j = 0; i < outsideSum.length*3/4, j < 5; i+=2, j++) {
  outsideSum[i].innerHTML = rowNumber[j].reduce(function(a, b) { return a + b; });
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



// Selecting/Deselecting inside numbers
var insideNumber = document.getElementsByClassName('inside');

for (var i = 0; i < insideNumber.length; i++) {
  insideNumber[i].addEventListener('click', function(event){
    if (this.classList.contains('inside-deselect')) { //select
      this.classList.remove('inside-deselect');
    }else{ //deselect
      this.classList.add('inside-deselect');
      this.classListremove('')
    }
  });
}
