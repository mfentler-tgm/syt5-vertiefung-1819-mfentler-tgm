var admin = require("firebase-admin")

var serviceAccount = require("../key/mein-vertiefungsprojekt-1-firebase-adminsdk-zqqo6-86d998d24f.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mein-vertiefungsprojekt-1.firebaseio.com"
})

var registrationToken = "fNAagkEyjDg:APA91bG7fdgYeCLPdkcH1uFi12GFis-cA7Pjaa_NSxUr8yrAVcQcJXNY5OeNtsw1PVW1q1zXcTqDhSgNc0HJbypw9q5aalEnBE7PWcbks4Cab9vhphIAXXBqS0KBvg6Zn-pkE2fr0jhO"

var payload = {
  notification: {
    title: "Message from NodeJS",
    body: "It works"
  }
}

 var options = {
  priority: "high",
  timeToLive: 60 * 60 *24
}

admin.messaging().sendToDevice(registrationToken, payload, options)
  .then(function(response) {
    console.log("Successfully sent message:", response)
  })
  .catch(function(error) {
    console.log("Error sending message:", error)
  })