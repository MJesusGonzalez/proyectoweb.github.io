import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"
import { auth } from './firebase.js'

const googleButton = document.querySelector('#googleLogin')

googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider()
    try {
        const userCredentials = await signInWithPopup(auth, provider)
        console.log(userCredentials)
        console.log(userCredentials.user.displayName)
    } catch (error) {
        console.log(error)
    }
})