import axios from "axios";

const API_KEY = "AIzaSyCY3z3Nt8DQplZRFAR1iLtmEL72u0ALiu8";

async function authenticatate(mode, email, password) {
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const resp = await axios.post(URL, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = resp.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticatate("signUp", email, password);
}

export function login(email, password) {
  return authenticatate("signInWithPassword", email, password);
}
