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
  switch (question) {
    case 1:
      if (inp > 0) {
        db.collection("users")
          .doc(currentUser.id)
          .update({
            Archery: firebase.firestore.FieldValue.increment(inp),
            photography: firebase.firestore.FieldValue.increment(inp),
            soccer: firebase.firestore.FieldValue.increment(inp),
            hiking: firebase.firestore.FieldValue.increment(inp),
            Kayak: firebase.firestore.FieldValue.increment(inp),
          });
      }
      if (inp < 0) {
        inp = inp * -1;
        db.collection("users").doc(currentUser.id).update({
          rubixCube: firebase.firestore.FieldValue.increment(inp),
          coding: firebase.firestore.FieldValue.increment(inp),
          gym: firebase.firestore.FieldValue.increment(inp),
          guitar: firebase.firestore.FieldValue.increment(inp),
          bouldering: firebase.firestore.FieldValue.increment(inp),
          magic: firebase.firestore.FieldValue.increment(inp),
          martialArts: firebase.firestore.FieldValue.increment(inp),
          crochet: firebase.firestore.FieldValue.increment(inp),
          boardGames: firebase.firestore.FieldValue.increment(inp),
          basketball: firebase.firestore.FieldValue.increment(inp),
          suduko: firebase.firestore.FieldValue.increment(inp),
          magicTricks: firebase.firestore.FieldValue.increment(inp),
          coincollecting: firebase.firestore.FieldValue.increment(inp),
          tableTennis: firebase.firestore.FieldValue.increment(inp),
          origami: firebase.firestore.FieldValue.increment(inp),
        })
      }
      break;
    case 2:
      if (inp > 0) {
        db.collection("users").doc(currentUser.id).update({
          
      })

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
