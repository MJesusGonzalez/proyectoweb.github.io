import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signinForm = document.querySelector('#signin-form');

signinForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const email = signinForm['signin-email'].value;
    const password = signinForm['signin-password'].value;
    try {
        const userCredentials =  await signInWithEmailAndPassword(auth, email, password);
        showMessage("todo bien", "error");
        window.location.href = 'home.html';
    } catch (error) {
        if (error.code === 'auth/invalid-email') {
            showMessage("Invalid email", "error");
        } else if (error.code === 'auth/wrong-password'){
            showMessage("wrong password", "error");
        } else if (error.code === 'auth/user-not-found') {
            showMessage("User not found", "error");
        } else {
            showMessage(error.code, "error");
        }
    }
})