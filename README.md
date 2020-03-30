# angular-express-seed
A basic template repository for an [AngularJS](https://angularjs.org/) and [ExpressJS](http://expressjs.com/) platform built on [NodeJS](https://nodejs.org/).

## Instructions

```
This Applicaiton has basic scaffolding to consume REST APIs from a SalesForce Instance using OAuth2. 

Clone this Repository in Local Machine. After cloning, traverese to Roor Directory of the project and Run 'npm install' to install all dependencies from package.json file. 

This application uses Express server to create a local server in your machine. 

Also, We are using jsForce plugin for authentication purpose and consume APIs from SalesForce Instance by provided jsForce library methods.

Once all the setup is completed, run 'npm start' to create a server and in your browser open http://localhost:8081, which redirects to login page. After you enter salesforce username and password, it will redirect to products page, where you can call multiple APIs.

All Routes are configured in router.js file. 

Important note: 

In router.js file --> 

 var conn = new jsforce.Connection({
    oauth2: {
      loginUrl: "salesforce login url",
      clientId:
        "put client id here",
      clientSecret:
        "client secret",
      redirectUri: "https://test.salesforce.com/services/oauth2/success"
    }
  });
  
  update the params here, like salesforce login url, client id, client secret key for successful authentication.

```


## Setup
```
npm install
```

# Running
```
npm start
```
