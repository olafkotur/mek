# MEK: React Native

## Pre-setup
* You must install expo tools before setting up the project, assuming you have `npm` installed
* `npm install expo-cli --global`

## Setup
* Make sure to be in your desired directory
* `git clone git@github.com:olafkotur/mek-user.git`
* `yarn` Do this each time package.json has changed, installs all relevant node_modules
* `yarn start` Starts the local server
* `?` to get more available options

## View App: Device
* Download `expo` app from the app store
* Android: Scan the barcode that is printed after running `yarn start`
* iOS: Login to your expo account on the expo app, the project will be listed after running `yarn start`
* You must have an internet connection

## View App: Simulator
* After running `yarn start`, press either `i` for iOS or `a` Android simulators, this will install and run the app
* You must have an internet connection, alertnatively run `yarn offline` - this will allow you to run the simulator without internet

## Notable folders and files
* `assets/` Static data such as images for the entire app
* `src/client/` Front-end related code that is directly shown to the user
* `src/server/` Back-end related code that carries out extra processing - any service should be called using a controller when requested from the client side
* `src/config.ts` Configuration information for the app that is passed globally
* `src/db.ts` Database related code responsible to store the connection - all connections should be requested from this file
* `.env` Environment variables - this file does not initally exist and must be created, ask someone for the variable data
