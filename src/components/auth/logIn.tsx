import React, { useState } from "react";
import axios from "axios";

interface LoginFormProps {
  onLoginSuccess: (userData: {
    id: string;
    email: string;
    name: string;
  }) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error before attempting login

    try {
      const response = await axios.post("/users/logIn", {
        email,
        password,
      });

      if (response.status === 200) {
        const { user, token } = response.data;
        document.cookie = `token=${token}; path=/; HttpOnly; Secure; SameSite=Strict`;

        onLoginSuccess(user);
      }
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        setError("Invalid email or password");
      } else {
        setError("Server error, please try again later.");
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
