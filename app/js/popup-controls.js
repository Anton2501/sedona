function controls(wrap) {
  var btnMin = wrap.children[0];
  var btnMax = wrap.children[2];
  var input = wrap.children[1];

  var value = input.value;

  btnMin.addEventListener('click', function(event) {
    event.preventDefault();    
    if(input.value <= 0) {
      input.value = 0; 
      value = 0;
    }else {
      input.value = --value;
    }
  })

  btnMax.addEventListener('click', function(event) {
    event.preventDefault();
    input.value = ++value;
  })
  
  if(input.value < 0) {
    input.value = 0;
  }
}

controls(document.getElementById('adult-controls'));
controls(document.getElementById('children-controls'));