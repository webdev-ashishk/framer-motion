import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <nav className="border-2 p-2 flex flex-wrap">
        <ul className="flex gap-2">
          <li className="text-3xl font-bold bg-gray-600 p-3 rounded-lg ml-2">
            <Link href="/">home</Link>
          </li>
          <li className="text-3xl font-bold bg-gray-600 p-3 rounded-lg ml-2">
            <Link href="/basics">Basics</Link>
          </li>
          <li className="text-3xl font-bold bg-gray-600 p-3 rounded-lg ml-2">
            <Link href="/guesture">Guesture</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
