
//Gets the result of the radio button
function getButton() {

var radios = document.getElementsByName("inlineRadioOptions");

for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    // do whatever you want with the checked radio
    return radios[i].value - 3;
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
  console.log(inp);
  switch(question) {
    case 1:
        if (inp > 0) {
          var inc = db.collection("users").doc(currentUser).get("Archery") + inp;
          console.log("the new value for Archery is" + inc);
          db.collection("users").doc(currentUser.id).update({
            Archery: inc
          })
        }
    case 2:

    case 3:

    case 4:
  
    case 5:

    case 6:

    case 7:

    case 8:

    case 9:

    case 10:

  }
}
