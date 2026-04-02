export default function HomePage() {
  const modules = [
    {
      title: "Mathematics: Numbers & Operations",
      status: "Completed",
      percent: 100,
      tone: "green",
      action: "Review",
    },
    {
      title: "Natural Sciences: Matter & Materials",
      status: "In Progress",
      percent: 64,
      tone: "amber",
      action: "Continue",
    },
    {
      title: "English Home Language: Comprehension",
      status: "Locked",
      percent: 0,
      tone: "blue",
      action: "Locked",
    },
  ];

  const projects = [
    {
      title: "Term 2 Maths Revision",
      percent: 78,
      action: "Continue",
    },
    {
      title: "Science Quiz Challenge",
      percent: 45,
      action: "Continue",
    },
    {
      title: "English Reading Tracker",
      percent: 20,
      action: "Start",
    },
  ];

  const achievements = [
    "CAPS Starter",
    "Maths Momentum",
    "Science Explorer",
    "Reading Star",
  ];

  return (
    <div className="min-h-screen bg-[#0b4fc1] text-slate-900">
      <header className="border-b-4 border-[#f4b400] bg-gradient-to-r from-[#f4b400] to-[#ffcc33] shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b4fc1] text-3xl shadow-md">
              🎓
            </div>
            <div>
              <div className="text-3xl font-black tracking-tight text-[#0b4fc1]">
                STUDY<span className="text-[#123a8f]">EDGE</span>
              </div>
              <p className="text-sm font-semibold text-[#123a8f]">
                South Africa CAPS-aligned learning
              </p>
            </div>
          </div>

          <div className="hidden rounded-2xl bg-[#0b4fc1] px-4 py-2 text-right text-white shadow-md md:block">
            <p className="text-xs uppercase tracking-[0.18em] text-blue-100">
              Curriculum
            </p>
            <p className="text-lg font-extrabold">CAPS Ready</p>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-[#0b4fc1] via-[#1664d9] to-[#0b4fc1] text-white shadow-inner">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-semibold backdrop-blur-sm">
              Learner Dashboard
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              Welcome back! 👋
            </h1>
            <p className="mt-3 text-lg text-blue-50 md:text-xl">
              You’ve completed{" "}
              <span className="font-black text-[#ffcc33]">42%</span> of your
              learning journey.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl rounded-t-[2rem] bg-slate-100 px-6 pb-12 pt-8 shadow-2xl">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <section className="rounded-[2rem] bg-gradient-to-br from-[#0b4fc1] to-[#1664d9] p-8 text-white shadow-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-6xl font-black leading-none">42%</p>
                <h2 className="mt-2 text-2xl font-bold">Overall Completion</h2>
                <p className="mt-2 text-blue-100">
                  Next milestone: English Reading Tracker
                </p>
              </div>
              <div className="rounded-3xl bg-white/10 px-5 py-4 text-sm shadow-inner backdrop-blur-sm">
                <p className="font-semibold text-blue-50">Current focus</p>
                <p className="mt-1 text-xl font-extrabold text-[#ffcc33]">
                  Natural Sciences
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="h-5 w-full overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-[#ffcc33]"
                  style={{ width: "42%" }}
                />
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-black text-[#123a8f]">
                Your Projects
              </h2>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#0b4fc1]">
                3 Active
              </span>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-extrabold text-[#123a8f]">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-slate-600">
                        {project.percent}% complete
                      </p>
                      <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-slate-200">
                        <div
                          className="h-full rounded-full bg-[#0b4fc1]"
                          style={{ width: `${project.percent}%` }}
                        />
                      </div>
                    </div>

                    <button className="rounded-2xl bg-[#ffcc33] px-5 py-3 text-sm font-extrabold text-[#123a8f] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                      {project.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-black text-[#123a8f]">
              Current Modules
            </h2>
            <span className="text-sm font-semibold text-slate-500">
              CAPS-aligned progression
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {modules.map((module) => {
              const toneClasses = {
                green: "bg-green-100 text-green-800 border-green-200",
                amber: "bg-amber-100 text-amber-800 border-amber-200",
                blue: "bg-blue-100 text-blue-800 border-blue-200",
              };

              return (
                <div
                  key={module.title}
                  className="rounded-[1.75rem] bg-white p-5 shadow-lg"
                >
                  <h3 className="text-xl font-extrabold text-[#123a8f]">
                    {module.title}
                  </h3>
                  <div
                    className={`mt-4 inline-flex rounded-full border px-3 py-1 text-sm font-bold ${
                      toneClasses[module.tone as keyof typeof toneClasses]
                    }`}
                  >
                    {module.status}
                  </div>

                  <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-[#ffcc33]"
                      style={{ width: `${module.percent}%` }}
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-600">
                      {module.percent}% complete
                    </span>
                    <button className="rounded-xl bg-[#0b4fc1] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:opacity-90">
                      {module.action}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] bg-white p-6 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-black text-[#123a8f]">
              Achievements
            </h2>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
              Motivation Boost
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            {achievements.map((badge) => (
              <div
                key={badge}
                className="rounded-full bg-gradient-to-r from-[#f97316] via-[#ffcc33] to-[#f4b400] px-6 py-3 text-lg font-black text-[#123a8f] shadow-md"
              >
                {badge}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-4 md:flex-row">
          <button className="flex-1 rounded-[1.5rem] bg-[#ffcc33] px-6 py-4 text-lg font-black text-[#123a8f] shadow-lg transition hover:-translate-y-0.5">
            Save Progress
          </button>
          <button className="flex-1 rounded-[1.5rem] bg-white px-6 py-4 text-lg font-black text-[#123a8f] shadow-lg transition hover:-translate-y-0.5">
            Update Info
          </button>
          <button className="flex-1 rounded-[1.5rem] bg-[#0b4fc1] px-6 py-4 text-lg font-black text-white shadow-lg transition hover:-translate-y-0.5">
            Continue Learning
          </button>
        </section>
      </main>
    </div>
  );
}
