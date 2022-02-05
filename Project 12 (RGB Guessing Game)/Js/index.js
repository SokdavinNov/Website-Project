const red_Input = document.querySelector("#red-Input");
const green_Input = document.querySelector("#green-Input");
const blue_Input = document.querySelector("#blue-Input");
const red_Value = document.querySelector("#red-Value");
const green_Value = document.querySelector("#green-Value");
const blue_Value = document.querySelector("#blue-Value");
const random_Color = document.querySelector("#random-Color");

// Generate Random Color
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
const generated_RGB = [red, green, blue];
console.log(generated_RGB);

random_Color.style.background = `rgb(${red},${green},${blue})`;

// Add event listener for slider to change the text box value
red_Input.addEventListener("input", () => {
  red_Value.value = red_Input.value;
});

green_Input.addEventListener("input", () => {
  green_Value.value = green_Input.value;
});

blue_Input.addEventListener("input", () => {
  blue_Value.value = blue_Input.value;
});

checkTextbox(red_Value, red_Input);
checkTextbox(green_Value, green_Input);
checkTextbox(blue_Value, blue_Input);

//Submit button open overlay and add value to overlay
document.querySelector("#submit-Button").addEventListener("click", () => {
  const input_RGB = [red_Value.value, green_Value.value, blue_Value.value];
  const score = checkGuess(input_RGB, generated_RGB);
  //Change text depending on score
  let text = "";
  if (score < 100) {
    text = "Not Even Close";
  } else if (score < 200) {
    text = "Good Guess";
  } else if (score < 300) {
    text = "Very Close Guess";
  } else if (score == 300) {
    text = "Correct Guess";
  }
  document.querySelector("#overlay-Container > h1").innerHTML = text;

  //Add rgb value to each span
  document.querySelector(
    "#overlay-Container > h3:nth-of-type(1)>span:nth-of-type(1)"
  ).innerHTML = red;
  document.querySelector(
    "#overlay-Container > h3:nth-of-type(1)>span:nth-of-type(2)"
  ).innerHTML = green;
  document.querySelector(
    "#overlay-Container > h3:nth-of-type(1)>span:nth-of-type(3)"
  ).innerHTML = blue;

  //Add score value
  document.querySelector(
    "#overlay-Container > h3:nth-of-type(2)>span"
  ).innerHTML = score;

  document.querySelector(".overlay").classList.add("active");
});

//Play again button refresh page
document.querySelector("#refresh-Button").addEventListener("click", () => {
  location.reload(true);
});

// Check if the user is trying to add letter to textbox and check if the value is correct
function checkTextbox(textBox, slider) {
  textBox.addEventListener("focus", () => {
    if (textBox.value == 0) {
      textBox.value = "";
    }
  });

  textBox.addEventListener("focusout", () => {
    if (textBox.value == "") {
      textBox.value = 0;
    }
  });

  textBox.addEventListener("input", () => {
    if (textBox.value != parseInt(textBox.value)) {
      textBox.value = textBox.value.substring(0, textBox.value.length - 1);
      if (textBox.value.length == 0) {
        slider.value = "0";
      } else {
        slider.value = textBox.value;
      }
    } else {
      if (textBox.value < 0) {
        textBox.value = "0";
        slider.value = "0";
      } else if (textBox.value > 255) {
        textBox.value = "255";
        slider.value = "255";
      } else {
        slider.value = textBox.value;
      }
    }
  });
}

// Check if the guess is correct
function checkGuess(input_RGB, generated_RGB) {
  if (input_RGB.length != 3 && generated_RGB.length != 3) return;
  let score = 0;
  for (let i = 0; i < input_RGB.length; i++) {
    let temp_Score = 100 - Math.abs(generated_RGB[i] - parseInt(input_RGB[i]));
    if (temp_Score < 0) {
      temp_Score = 0;
    }
    score += temp_Score;
  }
  return score;
}
