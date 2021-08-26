import * as firebase from "firebase";

export const authenticationRequest = async (
  email: string,
  password: string
) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const unAuthenticationRequest = async () => {
  await firebase.auth().signOut();
};
