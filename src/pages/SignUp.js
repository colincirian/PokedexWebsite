import React, { useState } from "react";
import { Link } from 'react-router-dom';
import supabase from "../Services/supabaseClient";
import Navbar from "./Navbar";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    if (email === "" || password === "") {
      setSignUpError("Email and Password fields cannot be empty.");
      return;
    }
  
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  
    if (error) {
      setSignUpError(processSupabaseError(error));
    } else {
      window.alert("Signup successful. Check your email for the verification link.");
    }
  };
  
  

  const processSupabaseError = (error) => {
    switch (error.message) {
      case "A user with this email already exists.":
        return "The email you entered is already in use. Please use a different email.";
      case "Password must be at least 6 characters.":
        return "Your password needs to be at least 6 characters long.";
      default:
        return error.message;
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <h4>Sign Up</h4>
        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="emailInput">Email address</label>
            <input
              type="email"
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="passwordInput">Password</label>
            <input
              type="password"
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign Up</button>
        <p>Already a member? <Link to="/login">Login!</Link></p>
          {signUpError && <div>{signUpError}</div>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;