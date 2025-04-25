import React, { useState } from "react";
import handleValidation from "../utils/handleValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [isSignIn, setSignIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMsg(null); // Clear error message
  };

  const toggleSignUpForm = () => {
    setSignIn(!isSignIn);
  };

  const checkValidation = () => {
    setIsLoading(true); // Start loading
    const error = handleValidation(email, password);
    if (error) {
      setErrorMsg(error);
      setIsLoading(false); // Stop loading
      return;
    }

    if (!isSignIn) {
      // Sign up logic
      if (password !== confirmPassword) {
        setErrorMsg("Passwords do not match");
        setIsLoading(false); // Stop loading
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: name,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              setIsLoading(false); // Stop loading
            })
            .catch((error) => {
              setErrorMsg(error.message);
              setIsLoading(false); // Stop loading
            });
        })
        .catch((error) => {
          setErrorMsg(`${error.code} - ${error.message}`);
          setIsLoading(false); // Stop loading
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setIsLoading(false); // Stop loading
        })
        .catch((error) => {
          setErrorMsg(`${error.code} - ${error.message}`);
          setIsLoading(false); // Stop loading
        });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      <div className="w-full max-w-md p-8 space-y-8 bg-white border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {!isSignIn && (
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {!isSignIn && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}

          <p className="text-base text-red-600">{errorMsg}</p>

          <div className="text-center">
            <button
              onClick={checkValidation}
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 active:text-blue-600 active:bg-white"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <p
            onClick={toggleSignUpForm}
            className="text-center text-blue-500 cursor-pointer hover:underline"
          >
            {isSignIn
              ? "New User? Register Now"
              : "Already have an account? Log In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
