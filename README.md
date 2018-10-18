# _IOT-Smartphone Einbindung_

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
