package com.example.mario.fcmdemoproject1;

import android.media.session.MediaSession;
import android.util.Log;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Gravity;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.iid.FirebaseInstanceId;

import java.util.HashMap;
import java.util.Map;

public class MainActivity extends AppCompatActivity implements MyCallBack{

    private static MainActivity instance;
    private static int msgCounter;

    @Override
    protected void onStart(){
        super.onStart();
        /**
        ((TextView)findViewById(R.id.msgCounterText)).setText(msgCounter + "");
        if(msgTitle != null)
            ((TextView)findViewById(R.id.title)).setText(msgTitle + "");
        if(msgBody != null)
            ((TextView)findViewById(R.id.body)).setText(msgBody + "");
        */
    }
    @Override
    protected void onResume(){
        super.onResume();
        /**
        ((TextView)findViewById(R.id.msgCounterText)).setText(msgCounter + "");
        if(msgTitle != null)
            ((TextView)findViewById(R.id.title)).setText(msgTitle + "");
        if(msgBody != null)
            ((TextView)findViewById(R.id.body)).setText(msgBody + "");
        */
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        instance = this;
        try {
            String refreshedToken = FirebaseInstanceId.getInstance().getToken();
            Log.d("Firebase id login", "Refreshed token: " + refreshedToken);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public static MainActivity getInstance() {
        return instance;
    }

    @Override
    public void updateMsgList(final String titleText, final String bodyText, final boolean counter){
        try {
            if (counter) {
                msgCounter = msgCounter + 1;
            }
            final TableLayout msgTable = findViewById(R.id.messageTable);
            final TableRow tr = new TableRow(this);
            final TextView title = new TextView(this);
            final TextView body = new TextView(this);


            runOnUiThread(new Runnable() {
                @Override
                public void run() {

                    tr.setLayoutParams(new TableRow.LayoutParams(TableRow.LayoutParams.MATCH_PARENT, TableRow.LayoutParams.MATCH_PARENT));


                    TableRow.LayoutParams lp = new TableRow.LayoutParams(TableRow.LayoutParams.WRAP_CONTENT, TableRow.LayoutParams.WRAP_CONTENT);
                    lp.gravity = Gravity.CENTER_HORIZONTAL | Gravity.CENTER_VERTICAL;


                    title.setLayoutParams(lp);
                    title.setText(titleText);


                    body.setLayoutParams(lp);
                    body.setText(bodyText);

                    tr.addView(title);
                    tr.addView(body);

                    msgTable.addView(tr);
                }
            });
            Log.d("Firbase id login", "contentText: " + body.getText());
        }catch(Exception e){
            Log.d("Firebase table exc","customException: " + e.getMessage());
        }
        /**
        if(key.equals("title")){
            msgTitle = value;
        }else if(key.equals("body")){
            msgBody = value;
        }
        //FirebaseDatabase database = FirebaseDatabase.getInstance();
        //DatabaseReference myRef = database.getReference("message");
        //myRef.setValue("Hello, World!");
         */
    }

}

class TokenObject{
    private String regToken;

    public TokenObject(String token){
        this.regToken = token;
    }
}

