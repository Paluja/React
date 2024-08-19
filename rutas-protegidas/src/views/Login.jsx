import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useState } from "react";

function Login() {
  const { login, errorMessage } = useAuthContext();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleInputs(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(user);
    navigate("/");
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleInputs}
          value={user.email}
          autoComplete="off"
          placeholder="Email"
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInputs}
          autoComplete="off"
          value={user.password}
          placeholder="Password"
          required
        />

        <p style={{color: "red"}}>{errorMessage}</p>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
