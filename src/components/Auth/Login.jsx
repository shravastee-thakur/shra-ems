import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-orange-600 py-10 px-10 rounded-xl">
        <h1 className="text-xl font-bold mb-10">Log in</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <input
            className="border-2 border-yellow-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full placeholder:text-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="border-2 border-yellow-600 py-3 px-5 text-xl mt-5 outline-none bg-transparent rounded-full placeholder:text-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter password"
          />
          <button className="border-none cursor-pointer bg-orange-600 py-3 px-5 text-xl mt-8 outline-none w-full rounded-full font-semibold">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
