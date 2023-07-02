import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from './showMessage.js'

let reset = document.querySelector("#recuperar");

reset.addEventListener("click", async(e) => {
    e.preventDefault();
    let email = document.querySelector("#reset-email");
    sendPasswordResetEmail(auth, email.value)
        .then(() => {
            showMessage("Correo enviado", "success");
        })
        .catch((error) => {
            showMessage("User not found", "error");
        const errorCode = error.code;
        const errorMessage = error.message;
    });
});
