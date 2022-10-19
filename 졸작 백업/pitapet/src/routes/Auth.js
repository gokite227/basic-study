import React, { useState } from "react";
import { authService, firebaseInstance } from "../fbase";
import "resources/css/loginform.css";

const Auth= () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error ,seterror] = useState("");
    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        if (name === "email") {
            setEmail(value);
        }else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
          let data;
          if (newAccount) {
            data = await authService.createUserWithEmailAndPassword(
              email,
              password
            );
          } else {
            data = await authService.signInWithEmailAndPassword(email, password);
          }
          console.log(data);
        } catch (error) {
          seterror(error.message);
        }
      };
      const toggleAccount = () => setNewAccount((prev) => !prev);
      const onSocialClick = async(event) => {
        const {
            target: {name},
        } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
      };
    return (
      <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div class="int-area">
          <input 
            type="email" 
            name="email" 
            id="id" 
            required
            value={email}
            onChange={onChange}
            />
          <label for="email">ID</label>
        </div>
        <div class="int-area">
          <input type="password" name="password" id="pw" required value={password} onChange={onChange}/>
          <label for="password">PASSWORD</label>
        </div>
        <div class="btn-area">
          <button id="btn" type="submit" >{newAccount ? "Create Account" : "Log In"}</button>
          <button id="btn" onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</button>
        <button id="btn" onClick={onSocialClick} name="google">continue with Google</button>
        </div>
        <div>
            
        </div>
      </form>
    </div>
    );
};
    
export default Auth;