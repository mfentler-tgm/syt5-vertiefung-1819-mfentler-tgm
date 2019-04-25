
const admin = require("firebase-admin")

var serviceAccount = require("../key/fcmdemoproject1-firebase-adminsdk-rcdjv-5ddbab0bca.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fcmdemoproject1.firebaseio.com"
})

var db = admin.firestore()

var allToken = []

function getToken(){
	db.collection('regDevice').doc('regDocument').collection('allRegDevices').get()
		.then(snapshot => {
			snapshot.forEach(doc => {
			  allToken.push(doc.data().regToken)
			  console.log('pushed element: ' + doc.data().regToken)
			})
		})
		.catch(err => {
			console.log('Error getting documents', err)
		})
}
if(process.argv[2] != null)
	allToken.push(process.argv[2])
else
	getToken()

var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer)
        timer = setTimeout(callback, ms)
    }
})()

delay(function(){
	allToken.forEach(token => {		
		admin.messaging().sendToDevice(token, payload, options)
		  .then(function(response) {
			console.log("Successfully sent message")
			process.exit()
		  })
		  .catch(function(error) {
			console.log("Error sending message:", error)
			process.exit()
		  })
		
	0})
}, 10000 )



/**
//Huawei Device Reg Token, bekommen durch Installation der App
var registrationToken = "eDxOInCpvUc:APA91bG_tb1Oxfldyr5spZCPkfCHTnkZmvlwC3bjgKYsZk2kIZeE1rXgZH5Hv0vx3NHGAU1Dz7N6eC5yqz279t5uXAGAulD1MtQABw4iYYqo3duT5ysj6ONmdSmuAdjpbePUmeI2wGnr"
*/
var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')


var message = "Test Message!"
if(process.argv[3] != null)
	message = process.argv[3]

var payload = {
  data: {
	  title: "Latest Message from Server:",
	  "notificationBody": "Open your app to see it",
	  body: message + "\n" + date
  }
}

 var options = {
  priority: "high",
  timeToLive: 60 * 60 * 24
}
