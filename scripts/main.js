var currentUser;
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        currentUser = db.collection("users").doc(user.uid);   //global
        console.log(currentUser);
        buildHobbyPoints(); //gives the user a list of all the hobbies to add points to
        loadSkeleton();
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



function writeHobbies() {
  //define a variable for the collection you want to create in Firestore to populate data
  var hobbiesRef = db.collection("hobbies");

  hobbiesRef.add({
    code: "Archery",
    name: "Archery",
    details:
      "Archery is the sport, practice, or skill of using a bow to shoot arrows.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "basketball",
    name: "Basketball",
    details:
      "Basketball is a game played between two teams of five players each on a rectangular court. Each team tries to score by tossing the ball through the opponent’s goal, a horizontal hoop and net called a basket.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "coincollecting",
    name: "Collecting",
    details:
      "Collecting, such as coin collecting, is all about finding rare sets of things just because they're neat",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "coding",
    name: "Coding",
    details:
      "Coding is creating computer programs, either as a fun project or for practical uses",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "gym",
    name: "Gym",
    details:
      "A gym is a place where people go to train and exercise, but also to unwind, socialize, and recharge.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "Kayak",
    name: "Kayaking and Paddle Boarding",
    details:
      "Kayaking is a fun activity that involves moving through water in a small water vessel with the aid of a double-bladed paddle. Paddle boarding is similar, but standing up!",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "crochet",
    name: "Crochet",
    details:
      "Similar to knitting, making clothes and other fabric products by looping yarn together.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "magic",
    name: "Magic",
    details:
      "Magic: The Gathering is a card game in which wizards cast spells, summon creatures, and exploit magic objects to defeat their opponents.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "origami",
    name: "Origami",
    details:
      "the Japanese art of folding paper into decorative shapes and figures.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "rubixCube",
    name: "Rubix-Cube",
    details:
      "The Rubik's Cube is a 3-D combination puzzle you try to solve as fast as possible (or at all) by memorizing patterns",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "suduko",
    name: "Suduko",
    details:
      "Sudoku is a pen and paper or digital number puzzle game. Find what number belongs in the gaps!",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "tableTennis",
    name: "Table-Tennis",
    details: "It's like tennis but smaller or pong but in real life.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "guitar",
    name: "Musical Instruments",
    details:
      "Learning an instrument is great way to stimulate your mind and recreate your favorite songs.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "bouldering",
    name: "Bouldering",
    details:
      "Indoor or Outdoor rock climbing / bouldering is a rewarding test of strength and coordination. Climbing gyms set up fake rocks with paths to challenge you.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "martialArts",
    name: "Martial Arts",
    details:
      "Learn disciplin and self defense skills while strengthening your body",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "photography",
    name: "Photography",
    details:
      "Take photos of the most beautiful things you can find or document the world around you",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "boardGames",
    name: "Table-top Games",
    details:
      "Board games, card games, party games, there's a lot more out there than just Monopoly!",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "soccer",
    name: "Soccer",
    details:
      "Use anything but your hands in this team-based sport famous around the globe.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "hiking",
    name: "Hiking",
    details:
      "Get out and see the world by foot, reaching new heights of achievement and elevation.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "magicTricks",
    name: "Magic Tricks",
    details:
      "Amaze your friends and family with sneaky slight of hand and misdirection.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });

  hobbiesRef.add({
    code: "woodworking",
    name: "Woodworking",
    details: "Get your hands busy and make something from scratch out of wood",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
}



function displayCards(collection) {
  let cardTemplate = document.getElementById("hobbiesCardTemplate");

  db.collection(collection)
    .get()
    .then((snap) => {
      //var i = 1;  //if you want to use commented out section
      snap.forEach((doc) => {
        //iterate thru each doc
        var title = doc.data().name; // get value of the "name" key
        var details = doc.data().details; // get value of the "details" key
        var hobbiesID = doc.data().code; //get unique ID to each hobbies to be used for fetching right image
        let newcard = cardTemplate.content.cloneNode(true);

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

displayCards("hobbies");

function logout() {
  console.log("logging out user");
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      window.location.href = "index.html";
    })
    .catch((error) => {
      // An error happened.
    });
}


function buildHobbyPoints() {
    db.collection("users").doc(currentUser.id).update({
            Archery: "0",
            basketball: "0",
            coincollecting: "0",
            coding: "0",
            gym: "0",
            Kayak: "0",
            crochet: "0",
            magic: "0",
            origami: "0",
            rubixCube:"0",
            suduko: "0",
            tableTennis: "0",
            guitar: "0",
            bouldering: "0",
            martialArts: "0",
            photography: "0",
            boardGames: "0",
            soccer: "0",
            hiking: "0",
            magicTricks: "0",
            woodworking: "0",
        });
    };
