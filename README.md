# _IOT-Smartphone Einbindung_
[Link zum Overleaf Protokoll](https://v2.overleaf.com/project/5bb5baccd912b3352d0abc3c)  


## Einleitung
In diesem Thema geht es darum, Nachrichten, die von einem Embeded-System an einen Server geschickt werden aufzubereiten und an ein Smartphone weiterzuleiten. Beispielsweise erkennt ein Raspberry-Pi über einen Sensor eine Bewegung und schickt somit ein Signal an einen Server. Dieser empfängt dieses und schickt dem Benutzer eine Notification auf sein Smartphone.  
Der grundlegende Teil mit der Sensorerkennung und Übertragung des Signals wird in einer Theorieeinheit im Systemtechnikunterricht geleehrt. Auf den weiteren Teil wird in dieser Vertiefung eingegangen.

## Ziele
Ziel ist es, bei einem Sensorinput am Embeded-Device eine Nachricht an einen Server zu schicken. Dieser empfängt die Nachricht, und sendet dann eine Notifizierung an das Smartphone.  
Weiterführend könnte man dann auch eine Steuerung des Devices via Smartphone in Betracht ziehen.  

Die Recherche zur Realisierung des Projekts ist auch ein Teil dieser Vertiefung.

## Projektvoraussetzungen

[Android Studio](https://developer.android.com/studio/)

## Recherche
Um den Message Transfer vom Server zu Smartphone zu realisieren, kann FCM (Firebase Cloud Messaging), früher Google Cloud Messaging (veraltet), verwendet werden.

### Alternativen
Firebase ist die am weitesten verbreitete und ausgereifste Solution. Allerdings gibt es auch Alternativen dazu, die man auch eventuell nehmen könnte.  
[Alternatives](https://blog.back4app.com/2018/01/12/firebase-alternatives/).  
Man könnte es auch mit Plain JavaScript nachbauen. Das wäre genauso kostenlos, würde aber mehr Zeit in Anspruch nehmen.  

## SetUp FCM
Dies kann man entweder automatisch von Android Studio machen lassen (Tools/Firebase/Cloud Messaging) oder manuell machen.  
Da ich Probleme mit der automatischen Erstellung hatte wird hier nun der manuelle Weg beschrieben.  

#### Step 1 - Firebase App Registrierung
In der Firebase Console [2], wählt man "Add new Project". Anschließend wird man nach einem Projektnamen gefragt. Diesen kann man frei wählen.  
Als nächstes muss man den Android Paketnamen eingeben. Diesen findet man in der "app/build.gradle" Datei im Android Projekt.  

Nun kann man das "google-services.json" File herunterladen, welches man im "app" Ordner des Android Projekts platziert.

#### Step 2 - Editing gradle
Im "build.gradle" File in den Dependencies folgende Line einfügen:

    classpath 'com.google.gms:google-services:4.1.0'
Im "app/build.gradle" File in den Dependencies folgene Lines einfügen:

    implementation 'com.google.firebase:firebase-core:16.0.1'
    implementation 'com.google.firebase:firebase-messaging:17.3.3'
Als letztes im selben File ganz unten noch folgene Line einfügen, um das Gradle Plugin zu aktivieren:

    // ADD THIS AT THE BOTTOM
    apply plugin: 'com.google.gms.google-services'
Jetzt macht man noch einen Gradle-Sync und dann sollte es rennen.

## Nachrichten an das Smartphone senden
### Manuell
Manuell kann man Nachrichten aus der Firebase-Console an das Smartphone versenden. Dazu wählt man in der Firebase-Console "Firebase-CloudMessaging" aus, das gewünschte Projekt, verfasst eine Nachricht und wählt schlussendlich die Devices aus, die die Nachricht empfangen sollen.

### Nachrichten vom HTTP Server verschicken
Die Firebase-CloudMessaging Server senden Nachrichten an die Clients. Um selber die Nachrichten zu versenden, ohne dazu in die Firebase-Console gehen zu müssen, kann man über einen XMPP oder HTTP Server die Nachricht an die Firebase Server senden.  
Dazu muss man für den HTTP Server einen privaten Server-Key erstellen. Um das zu tun geht man in die Firebaseconsole, ins Projekt, klickt auf das Zahnrad um die Einstellungen aufzurufen, Dienstkonten, neuen privaten Schlüssel generieren.  

Dieses JSON File sollte man sicher abspeichern!

#### Registration Token
Für die weiteren Schritte in diesem Tutorial braucht man den Registration Token der App:  
https://www.techotopia.com/index.php/Sending_Firebase_Cloud_Messages_from_a_Node.js_Server  

Hier wird erklärt wie man diesen bekommt.  
https://www.techotopia.com/index.php/Firebase_Cloud_Messaging  

Die Methode onTokenRefresh() wird nur aufgerufen wenn die App neu installiert wird auf dem Device! Wenn man den Registration Token so erhalten will geht das so:  
https://stackoverflow.com/questions/37451395/firebase-ontokenrefresh-is-not-called

## Sources
[1] [https://firebase.google.com/docs/cloud-messaging/](https://firebase.google.com/docs/cloud-messaging/)  
[2] [https://console.firebase.google.com/u/0/](https://console.firebase.google.com/u/0/)  
[3] [https://medium.com/android-school/firebaseinstanceidservice-is-deprecated-50651f17a148](https://medium.com/android-school/firebaseinstanceidservice-is-deprecated-50651f17a148)  
[4] [https://medium.com/@srinuraop/sending-messages-from-app-server-to-clients-using-fcm-b2a471fc3e33](https://medium.com/@srinuraop/sending-messages-from-app-server-to-clients-using-fcm-b2a471fc3e33)  
[5] [http://www.zoftino.com/android-notification-data-messages-from-app-server-using-firebase-cloud-messaging#app-server-to-fcm-server](http://www.zoftino.com/android-notification-data-messages-from-app-server-using-firebase-cloud-messaging#app-server-to-fcm-server)  
[6] [https://www.techotopia.com/index.php/Sending_Firebase_Cloud_Messages_from_a_Node.js_Server](https://www.techotopia.com/index.php/Sending_Firebase_Cloud_Messages_from_a_Node.js_Server)
