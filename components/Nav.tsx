"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/demo", label: "Demo" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50 px-4">
      <header className="glass-chrome mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-6 py-3 shadow-lg shadow-navy/5">
        <Link href="/" className="text-lg font-bold tracking-tight text-navy">
          Cyclo
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-navy/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/about" className="btn-primary !px-4 !py-2 text-sm">
            See the pitch
          </Link>
        </div>

        <button
          type="button"
          className="text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {open && (
        <div className="glass-chrome mx-auto mt-2 max-w-6xl rounded-2xl px-6 py-4 shadow-lg shadow-navy/5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium ${
                  pathname === link.href ? "text-primary" : "text-navy/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
