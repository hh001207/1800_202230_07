function giveFeedback() {
    let Activity = document.getElementById("activity").value;
    let Enjoyment = document.getElementById("enjoyment").value;
    let Recommend = document.getElementById("recommend").value;
    let Description = document.getElementById("description").value;
}

function writeFeedback() {
    console.log("inside write review")
    let Activity = document.getElementById("activity").value;
    let Enjoyment = document.getElementById("enjoyment").value;
    let Recommend = document.getElementById("recommend").value;
    let Description = document.getElementById("description").value;

    console.log(Activity, Enjoyment, Recommend, Description);

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid)
            var userID = user.uid;
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    var userEmail = userDoc.data().email;
                    db.collection("feedback").add({
                        userID: userID,
                        activity: Activity,
                        enjoyment: Enjoyment,
                        recommend: Recommend,
                        description: Description,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    }).then(() => {
                        window.location.href = "submitted.html"; //new line added
                    })
                })
        } else {
            // No user is signed in.
        }
    });
}
