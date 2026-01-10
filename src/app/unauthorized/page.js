import Link from "next/link";

export const metadata = {
  title: "Unauthorized Access!",
  robots: {
    index: false, // noindex
    follow: false, // nofollow
  },
};

export default function UnauthorizedPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center rounded-lg p-8 shadow">
        <h1 className="text-5xl font-bold text-red-600 mb-4">403</h1>

        <h2 className="text-2xl font-semibold mb-3">Unauthorized Access</h2>

        <p className="mb-6">
          You do not have permission to access this page.
          <br />
          Please login with the correct account or go back.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-2 text-white rounded bg-red-700 hover:bg-red-800 transition"
          >
            Go Home
          </Link>

          <Link
            href="/login/faculty"
            className="px-6 py-2 hover:text-white rounded border border-red-600 hover:bg-red-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
