var admin = require("firebase-admin")

var serviceAccount = require("../key/mein-vertiefungsprojekt-1-firebase-adminsdk-zqqo6-86d998d24f.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mein-vertiefungsprojekt-1.firebaseio.com"
})

//Huawei Device Reg Token, bekommen durch Installation der App
var registrationToken = "dXNCm8isUVs:APA91bHN24S0iQtdG4OKSfg4zS10GWrZ-MhhVJgGYD0uuewu5Abqw26s2S4BknQmMNqmCL8Qzhqu9CT_GCSl_DRkNFpko3vGad1mWn4wBsWhpaRSFQqxJmr6xulJrQ-IECpJ6S78YlL9"

var payload = {
  notification: {
    title: "Message from NodeJS",
    body: "It works"
  }
}

 var options = {
  priority: "high",
  timeToLive: 60 * 60 * 24
}

admin.messaging().sendToDevice(registrationToken, payload, options)
  .then(function(response) {
    console.log("Successfully sent message:", response)
    process.exit()
  })
  .catch(function(error) {
    console.log("Error sending message:", error)
    process.exit()
  })