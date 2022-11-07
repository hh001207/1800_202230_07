function insertName() {
    firebase.auth().onAuthStateChanged(user => {
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
        level: "hard",
        cost: "$150-$500",
        details: "Archery is the sport, practice, or skill of using a bow to shoot arrows.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    hobbiesRef.add({
        code: "basketball",
        name: "Basketball", 
        level: "easy",
        cost: "$20-$100",
        details: "Basketball is a game played between two teams of five players each on a rectangular court. Each team tries to score by tossing the ball through the opponent’s goal, a horizontal hoop and net called a basket.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    hobbiesRef.add({
        code: "coincollecting",
        name: "Coin_COllecting", 
        level: "easy",
        cost: "$0-$2000",
        details: "Coin collecting is the collecting of coins or other forms of minted legal tender",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    hobbiesRef.add({
        code: "dancing",
        name: "Dancing", 
        level: "easy-hard",
        cost: "$50-$85",
        details: "dance is the movement of the body in a rhythmic way.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    hobbiesRef.add({
        code: "gym",
        name: "Gym", 
        level: "easy-hard",
        cost: "$16-$170",
        details: "A gym is a place where people go to train and exercise, but also to unwind, socialize, and recharge.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    hobbiesRef.add({
        code: "Kayak",
        name: "Kayak", 
        level: "easy-hard",
        cost: "$200-$1,000",
        details: "Kayaking is a fun activity that involves moving through water in a small water vessel with the aid of a double-bladed paddle.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    hobbiesRef.add({
        code: "knitting",
        name: "Knitting", 
        level: "easy-hard",
        cost: "$20-$150",
        details: "production of fabric by employing a continuous yarn or set of yarns to form a series of interlocking loops.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    hobbiesRef.add({
        code: "magic",
        name: "Magic", 
        level: "easy-hard",
        cost: "$0-$1100",
        details: "Magic: The Gathering is a card game in which wizards cast spells, summon creatures, and exploit magic objects to defeat their opponents.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    hobbiesRef.add({
        code: "magic",
        name: "Magic", 
        level: "easy-hard",
        cost: "$0-$1100",
        details: "Magic: The Gathering is a card game in which wizards cast spells, summon creatures, and exploit magic objects to defeat their opponents.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    hobbiesRef.add({
        code: "origami",
        name: "Origami", 
        level: "easy-hard",
        cost: "$9-$50",
        details: "the Japanese art of folding paper into decorative shapes and figures.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    hobbiesRef.add({
        code: "rubix-cube",
        name: "Rubix-Cube", 
        level: "med-hard",
        cost: "$4-$50",
        details: "The Rubik's Cube is a 3-D combination puzzle.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    hobbiesRef.add({
        code: "suduko",
        name: "Suduko", 
        level: "easy-hard",
        cost: "$4-$50",
        details: "sudoku consists of a 9 × 9 grid with numbers appearing in some of the squares.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    hobbiesRef.add({
        code: "table-tennis",
        name: "Table-Tennis", 
        level: "easy-hard",
        cost: "$20-$50",
        details: "It's like pong but in real life.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
}

function displayCards(collection) {
    let cardTemplate = document.getElementById("hobbiesCardTemplate");

    db.collection(collection).get()
        .then(snap => {
            //var i = 1;  //if you want to use commented out section
            snap.forEach(doc => { //iterate thru each doc
                var title = doc.data().name; // get value of the "name" key
                var details = doc.data().details; // get value of the "details" key
                var hobbiesID = doc.data().code; //get unique ID to each hobbies to be used for fetching right image
                let newcard = cardTemplate.content.cloneNode(true);

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

displayCards("hobbies");