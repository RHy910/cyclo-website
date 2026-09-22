import Link from "next/link";
import { Mail } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="border-t border-tint bg-pale">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-navy/60 md:flex-row">
        <span>&copy; {new Date().getFullYear()} Cyclo. All rights reserved.</span>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/team" className="hover:text-primary">
            Team
          </Link>
          <Link href="/demo" className="hover:text-primary">
            Demo
          </Link>
          <span className="h-4 w-px bg-tint" />
          <a
            href="https://www.linkedin.com/in/ralph-hyacinthe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="mailto:rhyacinthe@colgate.edu"
            aria-label="Email"
            className="hover:text-primary"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
