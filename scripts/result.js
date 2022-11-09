function readName(collection) {
  let activityTemplate = document.getElementById("activitiesTemplate");

  db.collection(collection).get().limit(3)
      .then(snap => {

          snap.forEach(doc => {
              var title = doc.data().name;
              let newName = activityTemplate.content.cloneNode(true);
              console.log(title);
              newName.querySelector('.name-title').innerHTML = title;

              document.getElementById("activities-go-here").appendChild(newName);
          })
      })
}

readName("hobbies");

function readName1() {
  db.collection("hobbies").doc("AskeatjY22nRm0HENh5b")                                               //name of the collection and documents should matach excatly with what you have in Firestore
    .onSnapshot(doc => {                                                               //arrow notation
         console.log("current document data: " + doc.data());                          //.data() returns data object
          document.getElementById("activity1-goes-here").innerHTML = doc.data().code;
          document.getElementById("details1-goes-here").innerHTML = doc.data().details;     //using javascript to display the data on the right place
         //Here are other ways to access key:value data fields
         //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
         //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
  })
}



readName1();        //calling the function      

function readName2() {
  db.collection("hobbies").doc("DQaUgKNE0CMR2cjf1Kav")                                                 //name of the collection and documents should matach excatly with what you have in Firestore
    .onSnapshot(doc => {                                                               //arrow notation
         console.log("current document data: " + doc.data());                          //.data() returns data object
         document.getElementById("activity2-goes-here").innerHTML = doc.data().code; 
         document.getElementById("details2-goes-here").innerHTML = doc.data().details;     //using javascript to display the data on the right place
         //Here are other ways to access key:value data fields
         //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
         //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
  })
}

readName2(); 

function readName3() {
  db.collection("hobbies").doc("DxqkljsXpG13kz22653n")                                                 //name of the collection and documents should matach excatly with what you have in Firestore
    .onSnapshot(doc => {                                                               //arrow notation
         console.log("current document data: " + doc.data());                          //.data() returns data object
         document.getElementById("activity3-goes-here").innerHTML = doc.data().code;
         document.getElementById("details3-goes-here").innerHTML = doc.data().details;  //using javascript to display the data on the right place
         //Here are other ways to access key:value data fields
         //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
         //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
  })
}

readName3(); 