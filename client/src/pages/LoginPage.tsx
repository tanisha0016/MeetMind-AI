import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await login(email, password);

      localStorage.setItem(
        "token",
        response.data.token,
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user),
      );

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "100px auto",
      }}
    >
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <br />
        <br />

        <button type="submit">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;