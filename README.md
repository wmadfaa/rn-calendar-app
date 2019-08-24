# rn-calendar-app

## scripts

#### create new branch

```sh
yarn cli branch -t -d "" --origin
```

## Troubleshooting

#### Error: Execution failed for task ':app:validateSigningDebug'.
> Keystore file '/Users/wmadfaa/code/react-native/ble-plx-saga/android/app/debug.keystore' not found for signing config 'debug'.

```sh
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```
