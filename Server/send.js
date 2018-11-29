var admin = require("firebase-admin");

var serviceAccount = require("key/mein-vertiefungsprojekt-1-firebase-adminsdk-zqqo6-86d998d24f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mein-vertiefungsprojekt-1.firebaseio.com"
});

var registrationToken = "fx4pp7PuCy4:APA91bFfb331losYGsqogMcUty8VtxFKzeXqLa5Dw933rPvMmDGDqLHy-VZNrrTTe7axEFZE4jQXzH0mCKERMOHW463x39PcHNc8SSVz6ihQc7Z-BvusNPyxlFluyb7CJ58DGh1Ys_xw";