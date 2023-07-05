import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl">Home</h1>
      </div>
      <div className="flex justify-center">
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </Link>
        <Link to="/CreateUser">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            CreateUser
          </button>
        </Link>
      </div>
    </>
  );
}
export default Home;
