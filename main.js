import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// VERCEL ENV ATANGA A LO LAK DAN - %% HMANG
const firebaseConfig = {
  apiKey: "%VITE_FIREBASE_API_KEY%",
  authDomain: "%VITE_FIREBASE_AUTH_DOMAIN%",
  projectId: "%VITE_FIREBASE_PROJECT_ID%",
  storageBucket: "%VITE_FIREBASE_STORAGE_BUCKET%",
  messagingSenderId: "%VITE_FIREBASE_MESSAGING_SENDER_ID%",
  appId: "%VITE_FIREBASE_APP_ID%"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// PASSWORD EYE TOGGLE
window.togglePass = (id, el) => {
  const p = document.getElementById(id);
  if(p.type==='password'){ 
    p.type='text'; 
    el.textContent = '🙈'; 
  } else { 
    p.type='password'; 
    el.textContent = '👁️'; 
  }
}

// CUSTOM POPUP - "SAIKHAWTHLIR SAYS" AWM LO
window.showPopup = (title, msg) => {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-msg').innerText = msg;
  document.getElementById('popup').style.display = 'flex';
}
window.closePopup = () => {
  document.getElementById('popup').style.display = 'none';
}

// REGISTER BUTTON CLICK
document.getElementById('registerBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const pass = document.getElementById('pass').value;
  const cpass = document.getElementById('cpass').value;

  if(!name || !email || !pass || !cpass){ 
    showPopup("Error", "Field zawng zawng fill rawh"); 
    return; 
  }
  if(pass !== cpass){ 
    showPopup("Error", "Password a inang lo"); 
    return; 
  }
  if(pass.length < 6){ 
    showPopup("Error", "Password chu 6 character aia tam tur"); 
    return; 
  }

  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential)=> {
      return updateProfile(userCredential.user, {displayName: name})
    })
    .then(()=> {
      showPopup("Success", "Account siam a hlawhtling e!");
      setTimeout(()=> location.href="login.html", 1500);
    })
    .catch(e=> {
      showPopup("Error", e.message);
    });
});
