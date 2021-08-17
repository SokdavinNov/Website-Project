const calculator_buttons = document.getElementsByClassName("calculator-button");

//add id to all buttons
for (calculator_button of calculator_buttons) {
  var id = calculator_button.innerHTML;
  calculator_button.setAttribute("id", id);
}

//make number button add number to calculator screen
for (var i = 0; i < 10; i++) {
  ((i) => {
    document.getElementById(i).addEventListener("click", () => {
      input_number(i);
    });
  })(i);
}

document.getElementById("-/+").addEventListener("click", () => {
  change_negative_or_positive_number();
});

document.getElementById(".").addEventListener("click", () => {
  decimal();
});

document.getElementById("+").addEventListener("click", () => {
  calculate("+");
});

document.getElementById("-").addEventListener("click", () => {
  calculate("-");
});

document.getElementById("*").addEventListener("click", () => {
  calculate("*");
});

document.getElementById("/").addEventListener("click", () => {
  calculate("/");
});

document.getElementById("=").addEventListener("click", () => {
  calculate("=");
});

document.getElementById("Del").addEventListener("click", () => {
  delete_one_char();
});

document.getElementById("C").addEventListener("click", () => {
  delete_all_char();
});

document.getElementById("CE").addEventListener("click", () => {
  delete_all_char();
});

function input_number(number) {
  const input_screen = document.getElementById("input-screen");
  var input_screen_number = input_screen.innerHTML;
  if (input_screen_number == "0" && number == "0") {
    return;
  } else if (input_screen_number == "0" && number != "0") {
    input_screen_number = "";
  }

  if (input_screen.innerHTML.length > 10) {
    return;
  }

  input_screen_number += number;
  input_screen.innerHTML = input_screen_number;
}

function decimal() {
  const input_screen = document.getElementById("input-screen");
  var input_screen_number = input_screen.innerHTML;
  if (input_screen_number.includes(".")) {
    return;
  } else {
    input_screen_number += ".";
    input_screen.innerHTML = input_screen_number;
  }
}

function change_negative_or_positive_number() {
  const input_screen = document.getElementById("input-screen");
  var input_screen_number = input_screen.innerHTML;
  if (input_screen_number.includes("-")) {
    input_screen_number = input_screen_number.replace("-", "");
    input_screen.innerHTML = input_screen_number;
  } else {
    if (input_screen_number == "0") {
      return;
    }
    input_screen_number = "-" + input_screen_number;
    input_screen.innerHTML = input_screen_number;
  }
}

function delete_one_char() {
  const input_screen = document.getElementById("input-screen");
  var input_screen_number = input_screen.innerHTML;
  var is_negative = false;
  if (input_screen_number.includes("-")) {
    is_negative = true;
    input_screen_number = input_screen_number.replace("-", "");
  }
  if (input_screen_number.length > 1) {
    input_screen_number = input_screen_number.substr(
      0,
      input_screen_number.length - 1
    );
    if (is_negative) {
      input_screen_number = "-" + input_screen_number;
    }
    input_screen.innerHTML = input_screen_number;
  } else {
    input_screen_number = 0;
    input_screen.innerHTML = input_screen_number;
  }
}

function delete_all_char() {
  const input_screen = document.getElementById("input-screen");
  const calc_number_element = document.getElementById("calc-number");
  const operator_element = document.getElementById("operator");
  input_screen.innerHTML = 0;
  calc_number_element.innerHTML = "";
  operator_element.innerHTML = "";
}

function calculate(operator) {
  const input_screen = document.getElementById("input-screen");
  const calc_number_element = document.getElementById("calc-number");
  const operator_element = document.getElementById("operator");
  var input_screen_number = input_screen.innerHTML;
  var calc_number = calc_number_element.innerHTML;

  if (input_screen_number == "0") {
    if (
      operator_element.innerHTML != operator &&
      operator != "=" &&
      calc_number != ""
    ) {
      operator_element.innerHTML = operator;
      return;
    }
    return;
  } else {
    if (calc_number == "" && operator != "=") {
      calc_number_element.innerHTML = input_screen_number;
      input_screen.innerHTML = "0";
      operator_element.innerHTML = operator;
    } else {
      var result = input_screen_number;

      switch (operator_element.innerHTML) {
        case "+":
          result = parseFloat(calc_number) + parseFloat(input_screen_number);
          break;
        case "-":
          result = parseFloat(calc_number) - parseFloat(input_screen_number);
          break;
        case "*":
          result = parseFloat(calc_number) * parseFloat(input_screen_number);
          break;
        case "/":
          result = parseFloat(calc_number) / parseFloat(input_screen_number);
          break;
      }

      if (operator_element.innerHTML != operator) {
        if (operator == "=") {
          input_screen.innerHTML = result;
          calc_number_element.innerHTML = "";
          operator_element.innerHTML = "";
          return;
        } else {
          operator_element.innerHTML = operator;
        }
      }
      calc_number_element.innerHTML = result;
      input_screen.innerHTML = "0";
    }
  }
}
