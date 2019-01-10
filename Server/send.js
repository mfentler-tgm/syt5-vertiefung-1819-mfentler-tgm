var admin = require("firebase-admin")

var serviceAccount = require("../key/mein-vertiefungsprojekt-1-firebase-adminsdk-zqqo6-86d998d24f.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mein-vertiefungsprojekt-1.firebaseio.com"
})

//Huawei Device Reg Token, bekommen durch Installation der App
var registrationToken = "f_QqegKt144:APA91bGriLphae5ZNbbK1FX8BSKZnBpTLy0kMfvofcLqarE8btq8tf3xJZEAjrvIUWP0Spv30PD1pTSxnXe4mynplbMmphiwrXchXpt67vsTCKzhqWx9pePpbR7KDm15hNTarvEbJOUH"

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