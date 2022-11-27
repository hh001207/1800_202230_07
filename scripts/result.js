let change = 4;

let highest;

var currentUser;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    currentUser = db.collection("users").doc(user.uid); //global
    console.log(currentUser);
  } else {
    // No user is signed in.
    console.log("No user is signed in");
    //alert("Please log in");
    window.location.href = "index.html";
  }
});

function insertName() {
  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      // Do something for the currently logged-in user here:
      console.log(user.uid); //print the uid in the browser console
      console.log(user.displayName); //print the user name in the browser console
      user_Name = user.displayName;

      //method #1:  insert with html only
      //document.getElementById("name-goes-here").innerText = user_Name;    //using javascript
      //method #2:  insert using jquery
      $("#name-goes-here").text(user_Name); //using jquery
    } else {
      // No user is signed in.
    }
  });
}
insertName(); //run the function

function getnumber() {
  firebase.auth().onAuthStateChanged((user) => {});
}

// function gethigh() {
//   firebase.auth().onAuthStateChanged((user) => {
//     for (let i = 0; i  < user.data().size; i++){

//     }
//   });
// }


//old system coming from firebase



function resultCards(collection) {
  // let change = 3;
  document.getElementById(collection + "-go-here").innerHTML = "";
  let cardTemplate = document.getElementById("hobbiesCardTemplate");

  db.collection(collection)
    .limit(change)
    .get()
    .then((snap) => {
      console.log(snap.size);
      //var i = 1;  //if you want to use commented out section
      snap.forEach((doc) => {
        //iterate thru each doc
        var title = doc.data().name; // get value of the "name" key
        var details = doc.data().details; // get value of the "details" key
        var hobbiesID = doc.data().code; //get unique ID to each hobbies to be used for fetching right image
        let newcard = cardTemplate.content.cloneNode(true);
        console.log(title);
        //update title and text and image
        newcard.querySelector(".card-title").innerHTML = title;
        newcard.querySelector(".card-text").innerHTML = details;
        newcard.querySelector(".card-image").src = `./images/${hobbiesID}.jpg`; //Example: NV01.jpg
        //give unique ids to all elements for future use
        // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
        // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
        // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);
        //attach to gallery
        document.getElementById(collection + "-go-here").appendChild(newcard);
        //i++;   //if you want to use commented out section
      });
    });
}

//resultCards("hobbies");


function buildHobbyPoints() {

  window.localStorage.setItem(1, "Archery");
  window.localStorage.setItem(2, "basketball");
  window.localStorage.setItem(3, "boardGames");
  window.localStorage.setItem(4, "bouldering");
  window.localStorage.setItem(5, "coding");
  window.localStorage.setItem(6, "coincollecting");
  window.localStorage.setItem(7, "crochet");
  window.localStorage.setItem(8, "guitar");
  window.localStorage.setItem(9, "gym");
  window.localStorage.setItem(10, "hiking");
  window.localStorage.setItem(11, "Kayak");
  window.localStorage.setItem(12, "magic");
  window.localStorage.setItem(13, "magicTricks");
  window.localStorage.setItem(14, "martialArts");
  window.localStorage.setItem(15, "origami");
  window.localStorage.setItem(16, "photography");
  window.localStorage.setItem(17, "rubixCube");
  window.localStorage.setItem(18, "suduko");
  window.localStorage.setItem(19, "tableTennis");
  window.localStorage.setItem(20, "woodworking");
  
    // console.log("clear attempt");
    //   db.collection("users").doc(currentUser.id).update({
    //           Archery: 0,
    //           basketball: 0,
    //           coincollecting: 0,
    //           coding: 0,
    //           gym: 0,
    //           Kayak: 0,
    //           crochet: 0,
    //           magic: 0,
    //           origami: 0,
    //           rubixCube:0,
    //           suduko: 0,
    //           tableTennis: 0,
    //           guitar: 0,
    //           bouldering: 0,
    //           martialArts: 0,
    //           photography: 0,
    //           boardGames: 0,
    //           soccer: 0,
    //           hiking: 0,
    //           magicTricks: 0,
    //           woodworking: 0,
    //       }).then(()=>{
    //         console.log("Hobbies have been set to 0")
    //       })
          
      };
  

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randarray() {
  let num = [];
  let i = 0;
  while (i < 4) {
    let n = getRandomInt(19) + 1;
    if (! nsame(n)) {
      num.push(n);
      i++;
    }
  }
  function nsame(n) {
    for (var i = 0; i < num.length; i++) {
      if(n === num[i]) {
        return true;
      }
    }
    return false;
  }
  return num;
}

randarray();

function changelim() {
  buildHobbyPoints();
  let array = randarray();
  for(x = 0; x < 4; x++) {
    let n = array[x];
    console.log(n);
    let hobon = localStorage.getItem(n);
    resultsS(hobon);
  }
}

function showleft() {
  let x = localStorage.length;
  console.log(x);
  let max = 4;
  if (x == 5 || x == 6 || x == 8 || x == 10){
  for(i = 0; i < 21; i++) {
    if(localStorage.getItem(i) != null) {
      console.log(localStorage.getItem(i));
      let hobb = localStorage.getItem(i)
      if (max > 0){
      resultsS(hobb);
      max--;}
    }
  }}
  else {
    for(i = 21; i > 1; i--) {
      if(localStorage.getItem(i) != null) {
        console.log(localStorage.getItem(i));
        let hobb = localStorage.getItem(i)
        if (max > 0) {
        resultsS(hobb);
        max--;}
      }
    }
  }
}
showleft();

loadSkeleton();

//New system from localstorage

function resultsS(hob) {
  document.getElementById("hobbies" + "-go-here").innerHTML = "";
  let cardTemplate = document.getElementById("hobbiesCardTemplate");

  var docRef = db.collection("hobbies").where("code", "==", hob);
  docRef.limit(change).get().then((docList) => {
    docList.docs[0].ref.get().then((theThingIWant) => {
      var title = theThingIWant.data().name;
      var details = theThingIWant.data().details;
      var hobbiesID = theThingIWant.data().code;


      let newcard = cardTemplate.content.cloneNode(true);
      console.log(title);
      //update title and text and image
      newcard.querySelector(".card-title").innerHTML = title;
      newcard.querySelector(".card-text").innerHTML = details;
      newcard.querySelector(".card-image").src = `./images/${hobbiesID}.jpg`; //Example: NV01.jpg
      document.getElementById("hobbies" + "-go-here").appendChild(newcard);
    });
    //var heck = docList.docs[0].get().then((print) => {})
  });
}

resultsS(localStorage);