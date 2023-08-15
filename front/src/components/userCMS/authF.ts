import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { NavigateFunction } from "react-router-dom";

export const googleSignIn = async (auth: Auth, navigate: NavigateFunction) => {
    try {
        await signInWithPopup(auth, new GoogleAuthProvider());
      
        navigate("/")

    } catch (error) {
        console.log(error);
        // TODO: error popup
    }
}