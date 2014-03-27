var ref = new Firebase("https://drewtestapp.firebaseio.com");
var authClient = new FirebaseSimpleLogin(ref, function(error, user) {
  if (error) {
    console.log(error);
    return;
  }
  if (user) {
    console.log(user + " is logged in.");
  } else {
    console.log("user is loged out.");
  }
}