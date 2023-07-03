var x = '';
var arr = []

function updateLabel(){
    var label = document.getElementById('result');
    label.textContent = x;
}

function addChar(char) {
  x += char;
  updateLabel()
}

function clear() {
  x = '';
  updateLabel()
  arr = []
}
function getNum() {
    var i = 0;
    var s = 0;
    while (i < x.length) {
      var a = '';
      while (i < x.length && (!isNaN(parseFloat(x[i])) || x[i] === '.')) {
        a += x[i++];
      }
      if (a !== '') {
        arr[s++] = a;
      }
      if (i < x.length && (x[i] === '+' || x[i] === '-' || x[i] === '*' || x[i] === '/')) {
        arr[s++] = x[i++];
      }
      a = '';
    }
  }
  
function calculate(num1, num2, op){
    if (op == '+')
        return num1 + num2
    else if (op == '-')
        return num1 - num2
    else if (op == '*')
        return num1 * num2
    else if (op == '/')
        return num1 / num2
}

function display() {
    getNum();
    var i = 1;
    var t = parseFloat(arr[0]);
    while (i < arr.length) {
        t = calculate(t, parseFloat(arr[i + 1]), arr[i]);
        i += 2;
    }
    x = String(t);
    arr = [];
    updateLabel();
}


var buttons = document.querySelectorAll('.button');
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  if (button.textContent == 'C') {
    button.addEventListener('click', clear);
    continue;
  }
  else if(button.textContent == '='){
    button.addEventListener('click', display)
    continue
  }
  button.addEventListener('click', function(e) {
    addChar(e.target.textContent);
  });
}
