const calculator = {
  _number1: 0,
  _number2: 0,
  _operation: '',
  _inputOutput: document.getElementById('calcInput'),
  clear: function() {
    this._inputOutput.value = '';
  },
  add: function() {
      return this._number1 + this._number2;
  },
  subtract: function() {
    return this._number1 - this._number2;
},
  equals: function() {
      console.log(this);
      if (this._operation != '') {
          switch (this._operation) {          
              case '+':
                this._inputOutput.value = this.add();
                break;
              case '-':
                this._inputOutput.value = this.subtract();
                break;
      }
  }
},
  buttonClicked: function(button) {
    console.log(button);
    console.dir(button);

    let inputBox = this._inputOutput;

    switch (button.innerHTML) {
      case 'M':
        break;
      case 'C':
        calculator.clear();
        break;
      case '/':
        break;
      case 'X':
        break;
      case '-':
        this._operation = '-';
        this._inputOutput.value = '';
        break;
      case '+':
        this._operation = '+';
        this._inputOutput.value = '';
        break;
      case '=':
        this.equals();
        break;
      default:
        //if it made it to here it's a number
        inputBox.value = inputBox.value + button.innerHTML;
        if (this._operation == '') {
            this._number1 = parseFloat(button.innerHTML);
        } else {
            this._number2 = parseFloat(button.innerHTML);
        }
    }
  }
};
// const buttonContainer = document.querySelector('.calcButtons');
// buttonContainer.addEventListener('touchend', calculator.buttonClicked);

// function buttonClicked(button) {
//   console.log(button);
//   debugger;

//   let inputBox = this.inputOutput;

//   switch (button.innerHTML) {
//     case 'M':
//       break;
//     case 'C':
//       this.clear();
//       break;
//     case '/':
//       break;
//     case 'X':
//       break;
//     case '-':
//       break;
//     case '+':
//       break;
//     case '=':
//       break;
//     default:
//       //if it made it to here it's a number
//       inputBox.value = inputBox.value + button.innerHTML;
//   }
// }