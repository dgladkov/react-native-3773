# Example project for react-native issue 3773 #

## Steps to reproduce ##

1. Run `react-native run-android`
2. Swipe to reproduce the error

## Steps to fix ##

1. Change react-native dependency in`./android/app/build.gradle` to
   `"com.facebook.react:react-native:0.12.+"`
2. Run `react-native run-android`
3. Confirm the fix
