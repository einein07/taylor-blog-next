import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-row gap-2">
        <Link className="hover:text-blue-400" href="/about">
          About
        </Link>
        <Link className="hover:text-blue-400" href="/blog">
          Blog
        </Link>
      </div>
    </>
  );
}
