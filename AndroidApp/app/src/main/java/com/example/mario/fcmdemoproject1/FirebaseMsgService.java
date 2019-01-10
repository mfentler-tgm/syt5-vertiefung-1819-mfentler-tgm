package com.example.mario.fcmdemoproject1;

import android.content.Context;
import android.util.Log;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import org.w3c.dom.Text;

public class FirebaseMsgService extends FirebaseMessagingService {

    private static final String TAG = "FirebaseMsgService";
    private Context context;


    public FirebaseMsgService() {
        this.context = context;
    }

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {

        //msgCounter ++;

        Log.d(TAG, "From: " + remoteMessage.getFrom());

        if (remoteMessage.getNotification() != null) {
            ma.changeCounterText("geht");
            //String title = remoteMessage.getNotification().getTitle();
            //String body = remoteMessage.getNotification().getBody();

            //Log.d(TAG,"Notification Counter: " + msgCounter + "");
            //ma.changeCounterText(msgCounter + "");

            Log.d(TAG, "Notification Title: " +
                    remoteMessage.getNotification().getTitle());

            Log.d(TAG, "Notification Message: " +
                    remoteMessage.getNotification().getBody());
        }


        if (remoteMessage.getData().size() > 0) {
            Log.d(TAG, "Message data payload: " +
                    remoteMessage.getData().get("MyKey1"));
        }

    }
}