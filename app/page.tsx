import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-600 border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <span className="text-lg font-bold text-gray-900">Profreach App</span>

        <div className=" flex gap-4">
          <Link
            className="text-gray-800 hover:text-black "
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="text-gray-800 hover:text-black "
            href="/professor"
          >
            Professor
          </Link>
          <Link
            className="text-gray-800 hover:text-blue-600"
            href="/students"
          >
            Students
          </Link>
        </div>
      </div>
    </nav>
  );
}