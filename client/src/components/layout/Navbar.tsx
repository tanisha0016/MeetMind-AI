import Button from "../common/Button";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "null",
  );

  const token = localStorage.getItem("token");

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
          {token ? (
  <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-slate-600">
                  {user?.name}
                </span>

                <Button
                  variant="secondary"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </Button>

                <Button onClick={() => navigate("/upload")}>
                  Upload Meeting
                </Button>

                <Button
                  variant="secondary"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            
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