type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

const Button = ({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  const baseClasses =
    "rounded-lg px-5 py-2.5 font-medium transition duration-200";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;