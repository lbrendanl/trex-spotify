"use strict";
var spotifyRequestor;

// Define our Web Data Connector
(function() {
    $(document).ready(function () {
        if (!SpotifyAuthentication.hasTokens()) {
            console.log("We do not have SpotifyAuthentication tokens available");
            var redirectToSignIn = function() {
                console.log("Redirecting to login page");
                window.location.href = "/login";
            };
        } else {
            console.log("Access token found! " + SpotifyAuthentication.getAccessToken());            
        }
    });
})();
 