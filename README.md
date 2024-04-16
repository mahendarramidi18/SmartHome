 # SmartHome

1. Dependencies
    iOS
        a. XCode
        b. XCode command line tools 
        c. Node v20.11.1 (LTS)
        d. Cocoa pods
        e. Git (GitHub Desktop strongly recommended)
    Android
        a. Android Studio
        b. JAVA JDK v17
        c. Node v20.11.1 (LTS)
        d. Git (GitHub Desktop strongly recommended)

2.	Installation Instructions
   Mac 
        a. Take a git checkout from https://github.com/mahendarramidi18/SmartHome.git
        b. Create a feature branch from the main  branch 
        c. cd to Root Folder (You should be inside SmartHome)
        d. Run "npm install"
        e. Run "cd ios"
        f. Run "pod install"
        g. If there is any issue with installing pod dependencies run "bundle install" and "pod install" after bundle is successfull.

3.	Run Build
    iOS
        a. Ensure you are in the root folder. (You should be inside SmartHome)
        b. Run iOS application using - "npm run ios". 
    Android
        a. Ensure JAVA_HOME is setup with JDK v17 
        b. Ensure PATH is setup to $JAVA_HOME/bin:$PATH
        c. Ensure ANDROID_SDK_ROOT is Configured to your SDK Path. Default $HOME/Library/Android/sdk
        d. Ensure PATH contains both /emulator and /platform-tools present in ANDROID_SDK ROOT ($ANDROID_SDK_ROOT/emulator & $ANDROID_SDK_ROOT/platform-tools)
        e. If there is any issue with Android sdK location not mapping please change the sdk.dir path in Android local.properties file.
        f. Run Android application using - "npm run android". 

For instllation steps, please refer to 
https://reactnative.dev/docs/environment-setup
