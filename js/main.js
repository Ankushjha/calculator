// $(function () {
//   var back = `<i class="fa-solid fa-delete-left"></i>`;

//   var inputArray = [];

//   $(".button").on("click", function (event) {
//     var btnValue = $(this).html();
//     console.log(btnValue);
//     inputArray.append(btnValue);
//     console.log(inputArray)
    // var btnValue = $("#input-screen").html(btnValue);

    // var btnNumeric = $.isNumeric(btnValue);

    // if (btnNumeric === false) {
    //   console.log("This is not Numeric");
    // } else {
    //   $("#input-screen").append(html(btnValue));
    // }
//   });
// });

$(function () {
  var result = 0;
  var prevEntry = 0;
  var operation = null;
  var currentEntry = "0";
  updateScreen(result);
  var back = `<i class="fa-solid fa-delete-left"></i>`;

  $(".button").on("click", function (evt) {
    var buttonPressed = $(this).html();
    // console.log(buttonPressed);

    if (buttonPressed === "C") {
      result = 0;
      currentEntry = "0";
    } else if (buttonPressed === back) {
      currentEntry = currentEntry.substring(0, currentEntry.length - 1);
    } else if (buttonPressed === ".") {
      currentEntry += ".";
    } else if (isNumber(buttonPressed)) {
      if (currentEntry === "0") currentEntry = buttonPressed;
      else currentEntry = currentEntry + buttonPressed;
    } else if (isOpertor(buttonPressed)) {
      prevEntry = parseFloat(currentEntry);
      operation = buttonPressed;
      currentEntry = "";
    } else if (buttonPressed === "=") {
      currentEntry = operate(prevEntry, currentEntry, operation);
      operation = null;
    } else if (buttonPressed === "+") {
      currentEntry = Math;
    }
    updateScreen(currentEntry);
  });
});
updateScreen = function (displayValue) {
  var displayValue = displayValue.toString();
  $(".input-screen").html(displayValue.substring(0, 10));
};

isNumber = function (value) {
  return !isNaN(value);
};
isOpertor = function (value) {
  return value === "/" || value === "*" || value === "+" || value === "-" || value === "%";
};
operate = function (a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;
  if (operation === "/") return a / b;
  if (operation === "%") return a % b;
};
