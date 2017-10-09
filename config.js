// The necessary configuration for your server
// Contains credentials for your Spotify application
// And the new redirect path for the OAuth flow
// Should be kept secret

var PORT = 3333;

var redirectUri = "http://localhost:" + PORT + "/callback";

module.exports = {
 'PORT': PORT,
 'CLIENT_ID': 'c40108ac15a148f58b3705cd9812f076',
 'CLIENT_SECRET': '08911a45b7f34eb888b997d0d53b0e6c',
 'REDIRECT_URI': redirectUri
};
