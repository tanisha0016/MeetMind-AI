import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/auth.service";
import Navbar from "../components/layout/Navbar";
import toast from "react-hot-toast";


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
      toast.error("Login failed. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
  <Navbar />

  <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-100 px-4">

    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-lg">

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold text-slate-900">
            MeetMind AI
          </h1>

          <p className="mt-3 text-slate-500">
            Welcome Back
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Sign in to access your meeting dashboard.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            Create an account
          </Link>
        </p>

      </div>

    </div>
    </div>
    </>
  );
};

export default LoginPage;