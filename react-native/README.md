# React Native Studies
This Readme file was created basically to store my anotations during the course Create Your First React Native App on Udemy :)
Obs: For this repo, I'll be coding only for Android, so the commands will be written for this platform.

## Link
Course link: https://www.udemy.com/create-your-first-react-native-app/learn/

## Anotations
### Preparing Environment
#### React Native Dependencies (without a boilerplate)
First, install chocolatey.
Run this on cmd:
```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

After chocolatey is installed, React Native requires Node, Python2 and JDK. To install these dependencies with Chocolatey, just run:
```
choco install nodejs.install
choco install python2
choco install jdk8
```

Now, we need the React Native CLI, so run:
```
npm install -g react-native-cli
```

So, to finish, make sure Android Studio is correctly installed.

If not, just follow the procces of Android Studio installation for React Native [here](https://facebook.github.io/react-native/docs/getting-started.html).

#### React Native Dependencies (with react-create-app boilerplate)
Make sure Node is installed, so then install the create-react-native-app with the command line:
```
npm install -g create-react-native-app
```

After that, you just have to create your app and run it, so the commands are:
```
create-react-native-app AwesomeProject

cd AwesomeProject
npm start
```
Simple as that.

### Starting aplication
After installing the dependencies for React Native, just type:
```
react-native init MyApp
```

To start the project, type:
```
android avd
react-native run-android
```

To open developer tools on Android Emulator: Ctrl+M