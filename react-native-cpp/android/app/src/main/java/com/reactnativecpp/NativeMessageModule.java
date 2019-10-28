package com.reactnativecpp;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class NativeMessageModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    NativeMessageModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "NativeMessage";
    }

    @ReactMethod
    public void sayHello(Promise promise) {
        promise.resolve("Hello from Java!");
    }
}