const functions = require('firebase-functions')
const graphQLServer = require('./graphQL')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.graphQL = functions
	.runWith({ memory: '2GB' })
	.https.onRequest(graphQLServer)
