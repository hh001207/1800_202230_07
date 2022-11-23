let change = 4;

let highest;

var currentUser;
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        currentUser = db.collection("users").doc(user.uid);   //global
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
  firebase.auth().onAuthStateChanged((user) => {
    
  })
}

// function gethigh() {
//   firebase.auth().onAuthStateChanged((user) => {
//     for (let i = 0; i  < user.data().size; i++){
      
//     }
//   });
// }



function changelim() {
  change += 4;
  resultCards("hobbies");
  if (change > 4) {
    change = 4;
  }
}

function resultCards(collection) {
  // let change = 3;
  document.getElementById(collection + "-go-here").innerHTML="";
  let cardTemplate = document.getElementById("hobbiesCardTemplate");

  db.collection(collection).limit(change).get()
      .then(snap => {
        console.log(snap.size);
          //var i = 1;  //if you want to use commented out section
          snap.forEach(doc => { //iterate thru each doc
              var title = doc.data().name; // get value of the "name" key
              var details = doc.data().details; // get value of the "details" key
              var hobbiesID = doc.data().code; //get unique ID to each hobbies to be used for fetching right image
              let newcard = cardTemplate.content.cloneNode(true);
              console.log(title);
              //update title and text and image
              newcard.querySelector('.card-title').innerHTML = title;
              newcard.querySelector('.card-text').innerHTML = details;
              newcard.querySelector('.card-image').src = `./images/${hobbiesID}.jpg`; //Example: NV01.jpg
              //give unique ids to all elements for future use
              // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
              // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
              // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);
              //attach to gallery
              document.getElementById(collection + "-go-here").appendChild(newcard);
              //i++;   //if you want to use commented out section

          }) 
      })
}

resultCards("hobbies");
loadSkeleton();