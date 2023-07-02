import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"
import { auth } from './firebase.js'
import {loginCheck} from './loginCheck.js'
import { showMessage } from './showMessage.js'



import './logout.js'
onAuthStateChanged(auth, async (user) => {
    if ( user ) {
        console.log(user)
        showMessage("Bienvenido: " + user.email, 'success');
        loginCheck(user)
    } else {
        loginCheck(user)
    }
    
})