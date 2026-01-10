import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-black-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-gray-600 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-black text-white dark:bg-red-800 rounded-lg shadow hover:bg-black-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
