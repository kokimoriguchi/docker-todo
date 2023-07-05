import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { createUserHook } from "../hooks/createUserHook";

const CreateUser = () => {
  const userNameRef = useRef();
  const staffNumberRef = useRef();
  const storeNumberRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: userNameRef.current.value,
      number: staffNumberRef.current.value,
      store_id: storeNumberRef.current.value,
      password: passwordRef.current.value,
    };
    createUserHook(userData);
    userNameRef.current.value = "";
    staffNumberRef.current.value = "";
    storeNumberRef.current.value = "";
    passwordRef.current.value = "";
    console.log(userData);
  };
  return (
    <div className="">
      <div className="text-3xl text-center">
        <h1>CreateUser</h1>
      </div>
      <div className="flex justify-center">
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                UserName
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="UserName"
                ref={userNameRef}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                StaffNumber
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="StaffNumber"
                placeholder="StaffNumber"
                ref={staffNumberRef}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                StoreNumber
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="StoreNumber"
                placeholder="StoreNumber"
                ref={storeNumberRef}
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
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateUser;
