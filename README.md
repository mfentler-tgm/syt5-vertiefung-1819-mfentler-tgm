# _IOT-Smartphone Einbindung_
Link zum Overleaf Protokoll:  
https://v2.overleaf.com/project/5bb5baccd912b3352d0abc3c  

## Einleitung
In diesem Thema geht es darum, Nachrichten, die von einem Embeded-System an einen Server geschickt werden aufzubereiten und an ein Smartphone weiterzuleiten. Beispielsweise erkennt ein Raspberry-Pi über einen Sensor eine Bewegung und schickt somit ein Signal an einen Server. Dieser empfängt dieses und schickt dem Benutzer eine Notification auf sein Smartphone.  
Der grundlegende Teil mit der Sensorerkennung und Übertragung des Signals wird in einer Theorieeinheit im Systemtechnikunterricht geleehrt. Auf den weiteren Teil wird in dieser Vertiefung eingegangen.

## Ziele
Ziel ist es, bei einem Sensorinput am Embeded-Device eine Nachricht an einen Server zu schicken. Dieser empfängt die Nachricht, und sendet dann eine Notifizierung an das Smartphone.  
Weiterführend könnte man dann auch eine Steuerung des Devices via Smartphone in Betracht ziehen.  

Die Recherche zur Realisierung des Projekts ist auch ein Teil dieser Vertiefung.

## Prerequisits

Android Studio

## Recherche
Um den Message Transfer vom Server zu Smartphone zu realisieren, kann FCM (Firebase Cloud Messaging), früher Google Cloud Messaging (veraltet), verwendet werden.

### Alternativen

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
Jetzt macht man noch einen Gradle-Sync und dann sollte es rennen. (hopefully)
## Sources
[1]  
[2] https://console.firebase.google.com/u/0/  
