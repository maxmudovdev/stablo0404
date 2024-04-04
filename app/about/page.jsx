
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <header>
      <nav className="flex gap-8 mx-auto">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        image
        <Link href="/archive">Archive</Link>
        <Link href="/pro">Pro Version</Link>
        <Link href="/download">Download</Link>
      </nav>
    </header>
  );
}
