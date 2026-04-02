import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0b4fc1] text-slate-900">
      <header className="border-b-4 border-[#f4b400] bg-gradient-to-r from-[#f4b400] to-[#ffcc33] shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b4fc1] text-3xl shadow-md">🎓</div>
            <div>
              <div className="text-3xl font-black tracking-tight text-[#0b4fc1]">
                STUDY<span className="text-[#123a8f]">EDGE</span>
              </div>
              <p className="text-sm font-semibold text-[#123a8f]">South Africa CAPS-aligned learning</p>
            </div>
          </div>
          <div className="hidden rounded-2xl bg-[#0b4fc1] px-4 py-2 text-right text-white shadow-md md:block">
            <p className="text-xs uppercase tracking-[0.18em] text-blue-100">Curriculum</p>
            <p className="text-lg font-extrabold">CAPS Ready</p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 py-12">
        <div className="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[2rem] bg-gradient-to-br from-[#0b4fc1] to-[#1664d9] p-8 text-white shadow-xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-semibold backdrop-blur-sm">
              StudyEdge Learner Portal
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              Secure access for learners and parents
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-blue-50">
              Sign in to access your personalised CAPS-aligned dashboard, track learning progress,
              and continue from where you left off.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-3xl font-black text-[#ffcc33]">42%</p>
                <p className="mt-1 font-semibold">Progress tracking</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-3xl font-black text-[#ffcc33]">CAPS</p>
                <p className="mt-1 font-semibold">Aligned content</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-3xl font-black text-[#ffcc33]">24/7</p>
                <p className="mt-1 font-semibold">Portal access</p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-black text-[#123a8f]">Welcome</h2>
            <p className="mt-3 text-slate-600">
              Your dashboard is now protected. Please sign in before entering the portal.
            </p>

            <div className="mt-8 space-y-4">
              <Link href="/login" className="block rounded-[1.5rem] bg-[#0b4fc1] px-6 py-4 text-center text-lg font-black text-white shadow-lg transition hover:-translate-y-0.5">
                Go to Login
              </Link>
              <Link href="/sign-up" className="block rounded-[1.5rem] bg-[#ffcc33] px-6 py-4 text-center text-lg font-black text-[#123a8f] shadow-lg transition hover:-translate-y-0.5">
                Create Account
              </Link>
              <Link href="/dashboard" className="block rounded-[1.5rem] bg-slate-100 px-6 py-4 text-center text-lg font-black text-[#123a8f] shadow-lg transition hover:-translate-y-0.5">
                Open Dashboard
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
