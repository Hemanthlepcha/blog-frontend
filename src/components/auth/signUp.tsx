import React, { useState } from "react";
import { axiosInstance } from "../../api/axiosInstance.ts";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log("email", password);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/createUser", {
        name,
        email,
        password,
      });
      if (response.status === 200) {
        console.log("user created successful");
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Account creation failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign Up</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
