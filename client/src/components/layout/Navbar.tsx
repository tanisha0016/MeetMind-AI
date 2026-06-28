import Button from "../common/Button";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            MeetMind AI
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary">Login</Button>

          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;