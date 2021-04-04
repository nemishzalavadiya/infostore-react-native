# infostore-react-native

This app provides support to store info efficiently for future use.

# clean React native cache

cd android && ./gradlew cleanBuildCache

# create APK

![APK](https://medium.com/@hasangi/making-a-signed-apk-for-your-react-native-application-98e8529678db)

When you start developing a mobile application using React Native, the most important problem that comes to your mind whenever your boss asks you to give something to test for the QAs or “I want to see it on my android phone….” is,
How am I going to build an APK with React Native?
Well, Don’t worry!! I’m going to guide you through to solve your issue and create an APK successfully.
First of all, I guess you have noticed a folder with Android implementations as android in your React Native project.
The next most important thing is creating a private signing key.
Creating a Private Signing Key
For creating a signing key, you can use keytool .
If you are on Windows, keytool can be found at C:\Program Files\Java\jdkx.x.x_x\bin . Open a command prompt with Run as administrator.
Run the following code which generates a keystore valid for 10000 days under the file name my-key.keystore.
keytool -genkey -v -keystore my-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
Alias is a name that you will use later when signing your app, so remember to take note of the alias.
Don’t ever commit your keystore file to your version control and keep it private and safe
Now you are done with the first step of creating an APK now!
Adding Keystore to your project
Now, you have to place the created keystore file under the android/app directory in your react native project folder
Next, add the following lines to android\app\build.gradle

```android
android {
...
signingConfigs {
    release {
        if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
}
buildTypes {
    release {
        ......
        signingConfig signingConfigs.release
    }
}
...
}
```

Add the following lines to gradle.properties

```gradle
MYAPP_RELEASE_STORE_FILE=my-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=android
MYAPP_RELEASE_KEY_PASSWORD=android
```

Now you are ready to build your APK.
Generating APK
Place your terminal directory to android using,

```android
cd android

For windows,
> gradlew assembleRelease

For Linux,
> ./gradlew assembleRelease
```

AssembleRelease in gradle will perform bundling JavaScript needed to run your app on the APK.
gradle.properties should not include org.gradle.configureondemand=true . If you allow this in your gradle.properties, this will not bundle JS and assets to your APK
Now the APK creation process is done! You can find the generated APK at android/app/build/outputs/apk/app-release.apk
Hey, Cheer up!!! Now your main problem is solved! :)
Bonus Point
Well, In case your boss’s requirements get boosted,
Reducing the size of the APK
Oki, now this is something your boss would ask for definitely,
So here you go….
You need to enable Proguard which has some magic powers (well, not really magic, but it removes the bytecode and dependencies which your app doesn’t use)of reducing the size of your APK slightly.
Add the following line under buildTypes in 

```
>android\app\build.gradle
android {
    ... 
    buildTypes {
        release {
            ...
            minifyEnabled true
    }
    
}
```

# More Helpful article to create signed apk

https://www.instamobile.io/android-development/generate-react-native-release-build-android/


react-native bundle --platform android --dev false \
  --entry-file index.js \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/build/intermediates/res/merged/release/

cd android && ./gradlew assembleRelease
