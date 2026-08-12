import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// VERCEL ENV ATANGA A LO LAK DAN
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.togglePass = (id, el) => {
  const p = document.getElementById(id);
  if(p.type==='password'){ p.type='text'; el.textContent = '🙈'; } 
  else { p.type='password'; el.textContent = '👁️'; }
}
window.showPopup = (title, msg) => {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-msg').innerText = msg;
  document.getElementById('popup').style.display = 'flex';
}
window.closePopup = () => { document.getElementById('popup').style.display = 'none'; }

document.getElementById('registerBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;
  const cpass = document.getElementById('cpass').value;

  if(!name || !email || !pass || !cpass){ showPopup("Error", "Field zawng zawng fill rawh"); return; }
  if(pass !== cpass){ showPopup("Error", "Password a inang lo"); return; }

  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential)=> updateProfile(userCredential.user, {displayName: name}))
    .then(()=> { showPopup("Success", "Account siam a hlawhtling e!"); setTimeout(()=> location.href="login.html", 1500); })
    .catch(e=> showPopup("Error", e.message));
});
