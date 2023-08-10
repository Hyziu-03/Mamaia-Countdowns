import { 
  GoogleAuthProvider, 
  signInWithRedirect 
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCmNk2q3k4i3dV9ZG2ZfZeTKnum70UaVas",
  authDomain: "mamaia-countdowns.firebaseapp.com",
  projectId: "mamaia-countdowns",
  storageBucket: "mamaia-countdowns.appspot.com",
  messagingSenderId: "616823378468",
  appId: "1:616823378468:web:dc9e7312d9c95f94b1feb1",
  measurementId: "G-NZJKV7EEZM",
};

export let id = null;

export function login(auth) {
  auth.languageCode = "pl";
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
}
