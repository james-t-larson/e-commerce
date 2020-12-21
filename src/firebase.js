import firebase from "firebase"

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDxCxiC9ayCMIbB3UK6u1CMAi43xRkx9SA",
    authDomain: "clone-bb577.firebaseapp.com",
    projectId: "clone-bb577",
    storageBucket: "clone-bb577.appspot.com",
    messagingSenderId: "151577865510",
    appId: "1:151577865510:web:35f666793fee60addb65e7"
})

// const db = firebaseApp.firestrore()
const auth = firebase.auth()

// export {db, auth}
export { auth }