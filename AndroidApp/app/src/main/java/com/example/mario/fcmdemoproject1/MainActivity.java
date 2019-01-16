package com.example.mario.fcmdemoproject1;

import android.util.Log;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

import com.google.firebase.iid.FirebaseInstanceId;

public class MainActivity extends AppCompatActivity implements MyCallBack{

    private static MainActivity instance;
    private static int msgCounter;
    private static String msgTitle,msgBody;

    @Override
    protected void onStart(){
        super.onStart();

        ((TextView)findViewById(R.id.msgCounterText)).setText(msgCounter + "");
        if(msgTitle != null)
            ((TextView)findViewById(R.id.title)).setText(msgTitle + "");
        if(msgBody != null)
            ((TextView)findViewById(R.id.body)).setText(msgBody + "");

    }
    @Override
    protected void onResume(){
        super.onResume();

        ((TextView)findViewById(R.id.msgCounterText)).setText(msgCounter + "");
        if(msgTitle != null)
            ((TextView)findViewById(R.id.title)).setText(msgTitle + "");
        if(msgBody != null)
            ((TextView)findViewById(R.id.body)).setText(msgBody + "");
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        instance = this;
        try {
            String refreshedToken = FirebaseInstanceId.getInstance().getToken();
            Log.d("Firbase id login", "Refreshed token: " + refreshedToken);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public static MainActivity getInstance() {
        return instance;
    }

    @Override
    public void updateMsgCounter(String key, String value){
        if(key.equals("title")){
            msgTitle = value;
        }else if(key.equals("body")){
            msgBody = value;
        }else if(key.equals("counter")){
            msgCounter = msgCounter + 1;
        }
    }

}
