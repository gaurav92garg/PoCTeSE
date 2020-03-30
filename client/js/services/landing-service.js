'use strict';

function LandingService() {
    var theValue = {};
    theValue.setter = function(url,token) {
        theValue.instanceUrl = url;
        theValue.accessToken = token;
    }
    theValue.getter = function() {
        return theValue;
    }
    return theValue;
}

