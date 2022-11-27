//Gets the result of the radio button
function getButton() {
  var radios = document.getElementsByName("inlineRadioOptions");

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      // do whatever you want with the checked radio
      return radios[i].value;
    }
  }
  return 0;
}

// function countQ() {
//   if(localStorage.countQ) {
//     localStorage.countQ = Number(localStorage.countQ) + 1;
//   } else {localStorage.countQ = 1;}
// }

function addPoints(question) {
  var inp = getButton();
  console.log(question);
  console.log(inp);
  switch (question) {
    case 1:
      if (inp > 3) {
        window.localStorage.removeItem(3);
        window.localStorage.removeItem(5);
        window.localStorage.removeItem(7);
        window.localStorage.removeItem(15);
      }
      if (inp < 3) {
        window.localStorage.removeItem(11);
        window.localStorage.removeItem(10);
        window.localStorage.removeItem(16);

      }
      console.log("q1 points added");

      break;
    case 2:
      if (inp > 3) {
        window.localStorage.removeItem(7);
        window.localStorage.removeItem(5);
        window.localStorage.removeItem(15);
        window.localStorage.removeItem(17);
        window.localStorage.removeItem(18);
      }
      if (inp < 3) {
        window.localStorage.removeItem(9);
        window.localStorage.removeItem(14);
        window.localStorage.removeItem(2);
        window.localStorage.removeItem(19);
      }

      break;

    case 3:
      if (inp < 2) {
        window.localStorage.removeItem(6);
        window.localStorage.removeItem(20);
        window.localStorage.removeItem(11);
        window.localStorage.removeItem(1);
      }

      break;

    case 4:
      if (inp < 3) {
        window.localStorage.removeItem(8);
        window.localStorage.removeItem(13);
        window.localStorage.removeItem(14);
        window.localStorage.removeItem(9);
        window.localStorage.removeItem(16);
      }

      break;
    case 5:
      if (inp > 3) {
        window.localStorage.removeItem(3);
        window.localStorage.removeItem(6);
        window.localStorage.removeItem(13);
        window.localStorage.removeItem(12);

      }
      if (inp < 3) {
        window.localStorage.removeItem(4);
        window.localStorage.removeItem(9);
        window.localStorage.removeItem(14);
      }

      break;

    case 6:
      if (inp > 3) {
        window.localStorage.removeItem(18);
        window.localStorage.removeItem(17);
        window.localStorage.removeItem(19);
      }
      if (inp < 3) {
        window.localStorage.removeItem(7);
        window.localStorage.removeItem(12);
        window.localStorage.removeItem(20);
      }
      break;

    case 7:
      if (inp > 3) {
        window.localStorage.removeItem(3);
        window.localStorage.removeItem(10);
        window.localStorage.removeItem(17);
        window.localStorage.removeItem(11);
      }
      break;

    case 8:
      if (inp > 3) {
        window.localStorage.removeItem(7);
        window.localStorage.removeItem(18);
        window.localStorage.removeItem(15);
        window.localStorage.removeItem(5);
      }
      if (inp < 3) {
        window.localStorage.removeItem(2);
        window.localStorage.removeItem(3);
        window.localStorage.removeItem(19);
      }
      break;

    case 9:
      if (inp > 3) {
        window.localStorage.removeItem(2);
        window.localStorage.removeItem(14);
        window.localStorage.removeItem(3);
      }
      if (inp < 3) {
        window.localStorage.removeItem(1);
        window.localStorage.removeItem(18);
        window.localStorage.removeItem(17);
        window.localStorage.removeItem(13);
      }
      break;

    case 10:
      if (inp > 3) {
        window.localStorage.removeItem(15);
        window.localStorage.removeItem(10);
        window.localStorage.removeItem(14);
      }
      if (inp < 3) {
        window.localStorage.removeItem(17);
        window.localStorage.removeItem(18);
        window.localStorage.removeItem(12);
        window.localStorage.removeItem(5);
      }
      break;
  }
}
