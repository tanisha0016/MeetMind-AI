import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
      <h1 className="max-w-4xl text-6xl font-bold leading-tight text-slate-900">
        Turn Every Meeting Into Actionable Work
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-600">
        MeetMind AI transforms meeting recordings into transcripts,
        summaries, action items, and intelligent insights.
      </p>

      <div className="mt-10 flex gap-4">
        <Button onClick={() => navigate("/register")}>
          Get Started
        </Button>

        <Button
          variant="secondary"
          onClick={() =>
            document
              .getElementById("features")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default Hero;