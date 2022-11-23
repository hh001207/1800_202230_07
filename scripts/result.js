let change = 4;

let highest;

// if (user)


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
          readDetails(); 
      })
}

resultCards("hobbies");
loadSkeleton();


function readDetails() {
  db.collection("hobbies").limit(change).get()                                                     //name of the collection and documents should matach
    .then(snap => {
        //var i = 1;  //if you want to use commented out section
        snap.forEach(doc => { //iterate thru each doc
            var title = doc.data().name; // get value of the "name" key
            var details = doc.data().details; // get value of the "details" key
            document.getElementById("name-goes-here").innerHTML = title;
            document.getElementById("details-goes-here").innerHTML = details;
            console.log(title);
            console.log(details);
            //update title and text and image
            //i++;   //if you want to use commented out section

    // .onSnapshot(somedoc => {             
      
    //   //arrow notation
    //      console.log("current document data: " + somedoc.data());                          //.data() returns data object
    //      document.getElementById("quote-goes-here").innerHTML = somedoc.data().quote;      //using javascript to display the data on the right place
         
    //      //Here are other ways to access key:value data fields
    //      //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
    //      //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
      })
  })
}

readDetails();

       //calling the function