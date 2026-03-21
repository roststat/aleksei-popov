"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О себе" },
  { href: "/projects", label: "Проекты" },
  { href: "/videos", label: "Видео" },
  { href: "/articles", label: "Статьи" },
  { href: "/blog", label: "Блог" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200 sticky top-0 bg-white z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Алексей Попов
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-neutral-900 font-medium"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span className={`block w-6 h-0.5 bg-neutral-900 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-neutral-900 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-neutral-900 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-neutral-100 px-4 py-3 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm ${
                pathname === link.href ? "font-medium text-neutral-900" : "text-neutral-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
