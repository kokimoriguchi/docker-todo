import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { LoginHook } from "../hooks/loginHooks";
import { LoginOutHook } from "../hooks/logout";

const Login = () => {
  const staffNumberRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      number: staffNumberRef.current.value,
      password: passwordRef.current.value,
    };
    LoginHook(userData);
    staffNumberRef.current.value = "";
    passwordRef.current.value = "";
  };

  const handleLogout = () => {
    LoginOutHook();
  };

  return (
    <div className="">
      <div className="text-3xl text-center">
        <h1>Login</h1>
      </div>
      <div className="flex justify-center">
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Number
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Number"
                ref={staffNumberRef}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="password"
                placeholder="******************"
                ref={passwordRef}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Home
          </button>
        </Link>
        <>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            logout
          </button>
        </>
      </div>
    </div>
  );
};

export default Login;
