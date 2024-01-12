const firebase = require("firebase-admin");

firebase.initializeApp({
  credential: firebase.credential.cert(require('./keys/admin.json'))
});
const db = firebase.firestore();
const User = db.collection("user");
const FoodList = db.collection("foodList");
module.exports = { User, FoodList };