import React, { useState } from "react";
import { Button, Input, PasswordInput } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import { AtSign, ChromeIcon, Lock, LogInIcon } from "lucide-react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "../../../firebaseconfig";
import { notifications } from "@mantine/notifications";
import babyyodaSrc from "../../images/baby-yoda.svg";
import { useUserStore } from "../../store/app.store";

function SignIn() {
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();


   // Get the intended destination from location state
   const from = location.state?.from || '/';
   const itemId = location.state?.itemId;
 
   const handleAuthSuccess = (user) => {
     setUser(user);
     notifications.show({
       title: 'Success',
       message: 'Logged in successfully!',
       color: 'green'
     });
 
     // Navigate to the intended destination
     // If there was a specific item ID, include it in the navigation
     if (from.includes('/resources/') && itemId) {
       const fullPath = `${from}/${itemId}`;
       navigate(fullPath);
     } else {
       navigate(from);
     }
   };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
      setUser(result.user);
      notifications.show({
        title: "Success",
        message: "Logged in with Google successfully!",
        color: "green",
      });
      handleAuthSuccess(result.user);
    } catch (error: any) {
      notifications.show({
        title: "Google Sign-In Error",
        message: error.message,
        color: "red",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300/50 via-blue-900/80 to-blue-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-black/40 backdrop-blur-lg rounded-2xl shadow-2xl border border-yellow-500/30 overflow-hidden">
        <div className="p-8 text-center">
          <img
            src={babyyodaSrc}
            alt="Baby Yoda"
            className="mx-auto w-32 h-32 mb-6 animate-pulse"
          />
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">
            Star Wars Trivia Portal
          </h2>
          <p className="text-blue-200">
            Woah stop right there! Are you a scout??
          </p>
          <p className="text-blue-200 mb-8">
            Authenticate to enter the galaxy of knowledge
          </p>

          <div className="space-y-4">
            <Button
              fullWidth
              color="yellow"
              size="md"
              onClick={handleGoogleSignIn}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black">
              Enter the Rebel network
            </Button>

            <div className="text-center text-sm text-blue-200 mt-4">
              May the Force guide your login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
