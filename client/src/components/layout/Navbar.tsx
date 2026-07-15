import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <h1
            className="cursor-pointer text-xl font-bold text-slate-900"
            onClick={() => navigate("/")}
          >
            MeetMind AI
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Button
                onClick={() => navigate("/upload")}
              >
                Upload Meeting
              </Button>

              <Button
                variant="secondary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="secondary"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>

              <Button
                onClick={() => navigate("/register")}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;