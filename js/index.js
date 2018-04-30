
var 


var outsideSum = document.getElementsByClassName('outside-sum');

for (var i = 0; i < outsideSum.length; i++) {
  outsideSum[i] =
}






// Selecting/Deselecting inside numbers
var insideNumber = document.getElementsByClassName('inside');

for (var i = 0; i < insideNumber.length; i++) {
  insideNumber[i].addEventListener('click', function(event){
    if (this.classList.contains('inside-deselect')) {
      this.classList.remove('inside-deselect');
    }else{
      this.classList.add('inside-deselect');
    }
  });
}
