const features = [
  {
    title: "AI Transcripts",
    description: "Accurate speech-to-text conversion.",
  },
  {
    title: "Smart Summaries",
    description: "Understand meetings in seconds.",
  },
  {
    title: "Action Items",
    description: "Automatically extract tasks.",
  },
  {
    title: "Meeting Chat",
    description: "Ask AI questions about any meeting.",
  },
];

const Features = () => {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Everything You Need
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="mt-3 text-slate-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;