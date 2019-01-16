var admin = require("firebase-admin")

var serviceAccount = require("../key/mein-vertiefungsprojekt-1-firebase-adminsdk-zqqo6-86d998d24f.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mein-vertiefungsprojekt-1.firebaseio.com"
})

//Huawei Device Reg Token, bekommen durch Installation der App
var registrationToken = "eDxOInCpvUc:APA91bG_tb1Oxfldyr5spZCPkfCHTnkZmvlwC3bjgKYsZk2kIZeE1rXgZH5Hv0vx3NHGAU1Dz7N6eC5yqz279t5uXAGAulD1MtQABw4iYYqo3duT5ysj6ONmdSmuAdjpbePUmeI2wGnr"

var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

/**
notification: {
    title: "Message from Server",
    body: "Your Server has sent you a new message, check it out!"
  },
*/

var payload = {
  data: {
	  title: "Latest Message from Server:",
	  body: "if you see this it is working\n" + date
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