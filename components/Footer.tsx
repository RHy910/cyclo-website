import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-tint bg-pale">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-navy/60 md:flex-row">
        <span>&copy; {new Date().getFullYear()} Cyclo. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/demo" className="hover:text-primary">
            Demo
          </Link>
        </div>
      </div>
    </footer>
  );
}
