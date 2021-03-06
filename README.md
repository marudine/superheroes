<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!--**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*-->
# META-HUMAN DATABASE

## TABLE OF CONTENTS

- [PREVIEW](#sample)
- [OVERVIEW](#overview)
- [LINK TO DEPLOYED APPLICATION](#link-to-deployed-application)
- [TECHNOLOGIES](#technologies)
- [INSTALLATION INSTRUCTIONS](#installation-instructions)
  - [Dependency installation timeline:](#dependency-installation-timeline)
  - [Dependency Installation/Set Up](#dependency-installationset-up)
  - [Cloning the repo:](#cloning-the-repo)
  - [Running the application:](#running-the-application)
  - [Running the unit tests:](#running-the-unit-tests)
  - [Installing the End-to-End Test tool, Protractor](#installing-the-end-to-end-test-tool-protractor)
  - [Running the End-to-End tests:](#running-the-end-to-end-tests)
- [ISSUES](#issues)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

&nbsp;
## PREVIEW

![untitled 4](https://user-images.githubusercontent.com/24227633/32865566-8ef3cf8a-ca5b-11e7-8536-de4efab50495.gif)


&nbsp;
## OVERVIEW

- An application to help you keep track of who's who in the world of super-powered individuals. Listing their aliases, powers and power levels.

- Written in Angular 4.

- Tested using the Jasmine framework, with Protractor for end-to-end tests and Karma for unit tests.

&nbsp;
## LINK TO DEPLOYED APPLICATION

  https://metahuman-db.herokuapp.com

&nbsp;
## TECHNOLOGIES

- Angular 4
- HTML
- CSS(with Sass)
- Typescript
- Protractor
- Karma

&nbsp;
## INSTALLATION INSTRUCTIONS

### Dependency installation timeline:

  Xcode —> Homebrew —> Node.js(with NPM (Node Package Manager)) —> Angular CLI


### Dependency Installation/Set Up

1. Download Xcode via the Mac App Store.

    https://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12

2. Type the following code in your Command Line and follow the instructions to install Homebrew.

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”

3. Type:

  - brew install node@8.4.0

4. NPM is installed automatically alongside Node. To test that Node is installed correctly type:

  - node -v

  You should see something resembling: v8.4.0

5. To test that NPM is installed correctly type:

  - npm -v

  You should see something resembling: 5.4.0

6. To install the Angular CLI tool, type:

  - npm install -g @angular/cli@1.4.5


### Cloning the repo:

  - git clone https://github.com/marudine/metaHumanDB.git

  - To ensure that all of your dependencies are equivalent to those of the app, from the directory you cloned into, type:

  - npm install


### Running the application:

  Start a server on your machine by typing:

  - ng serve --open

  A local version of Meta-Human Database will open in your browser at http://localhost:4200/.

  For the live/deployed version of the application:

  - https://metahuman-db.herokuapp.com/


### Running the unit tests:

![untitled 3](https://user-images.githubusercontent.com/24227633/32740877-4a77ebcc-c89c-11e7-9720-5610457bb3f8.gif)


  In a dedicated window of your command line tool (but from the same directory as where you typed ng serve --open ), type:

  - ng test

  These tests will also run in a specifically allocated browser window. Any changes you make to your code will be reflected immediately in the tests.


### Installing the End-to-End Test tool, Protractor

  Again, in a dedicated window of your command line tool (but from the same location as where you typed ng serve --open ), type:

  - npm install -g protractor

  This will install two more command line tools, Protractor itself and Selenium’s webdriver-manager.

  webdriver-manager is necessary to start up the server that Protractor uses to run its tests.

### Running the Protractor End-to-End tests:


![protractor_end-to-end_tests](https://user-images.githubusercontent.com/24227633/30978571-db678ac8-a472-11e7-952f-5a106bb6e7ca.gif)


  **NB The Protractor End-to-End tests require that the app server (which you started via 'ng serve') is already running.**


  Open another dedicated window in the same location as the previous commands, (I usually find it useful to have a split screen set up so I can see the web driver-manager and protractor outputs side-by-side).
  Type:

  - webdriver-manager start

  Let that action complete (it should inform you on the last line of the stack trace that the “Selenium Server is up and running”.)

  Then:

  - protractor conf.js

  These tests will also run in a dedicated window of your browser. Switch back to the command line window to see the rows of green passed test dots!


  **NB The majority of problems you'll come across while running the Protractor End-to-End tests can be resolved by typing 'ctrl c' in the Webdriver window, then 'webdriver-manager update'.
  Restart the the Selenium Server with 'webdriver-manager start', then over in the protractor window type 'protractor conf.js' at the prompt again.
  On the rare occasion that this doesn't work, quitting and re-opening your console may also be necessary.**


&nbsp;
## ISSUES

  - Angular 4 not being a mature iteration has hindered me quite a bit. Specific info is hard to find or there is very little of it once I find any. I expected this but was hoping the sparse amount of information wouldn't hold me back as much as it has.

  - Took a long time to (begin to) understand how to properly write tests around promises, http requests and asynchrony. In preparing the app to make http requests almost all of my passing tests broke due to the implementation of accessing external data and therefore dealing with asynchronous services.

  - Heroku required even more specific configuration than normal. There were a number of small pre-requisites that needed fulfilling before the platform accepted my initial deployment...even though the app worked perfectly locally.
