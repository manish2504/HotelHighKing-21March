import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const api = "http://localhost:5000/admin/loginuser";
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (!json.Success) {
      alert("Invalid Credentials");
    }
    if (json.Success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/admin");
    }
  };

  const change = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={change}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={change}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2 text-sm text-gray-600">
                Remember me
              </span>
            </div>
            <Link to="#" className="text-sm text-indigo-600 hover:text-indigo-800">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Submit
          </button>

          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">
              I'm a new user?{" "}
              <Link to="/createuser" className="text-indigo-600 hover:text-indigo-800">
                Create an account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
