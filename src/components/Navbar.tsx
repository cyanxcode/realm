import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-black flex px-12 items-center justify-between">
      <h2 className="text-white font-bold text-2xl">Realm</h2>
      <div className="flex gap-8">
        <Link href="/" className="text-white font-md ">
          Home
        </Link>
        <Link href="/discover" className="text-white font-md ">
          Discover
        </Link>
      </div>
    </nav>
  );
}
