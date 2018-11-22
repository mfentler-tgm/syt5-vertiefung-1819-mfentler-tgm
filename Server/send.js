var admin = require("firebase-admin");

var serviceAccount = require("key/mein-vertiefungsprojekt-1-firebase-adminsdk-zqqo6-86d998d24f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mein-vertiefungsprojekt-1.firebaseio.com"
});