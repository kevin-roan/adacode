import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { app } from "./firebaseHelper";

const auth = getAuth();

const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user signed in");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("user signin failed");
      console.log(errorCode, errorMessage);
    });
};

const signOutCurrentUser = () => {
  signOut(auth)
    .then(() => {
      window.alert("User Signed Out");
    })
    .catch((error) => console.log(error));
};

export { signIn, signOutCurrentUser };
