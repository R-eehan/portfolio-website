"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-5 md:py-6 transition-all duration-300 ${
        isScrolled
          ? "bg-[#181818]/90 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
      style={{ borderColor: isScrolled ? "var(--mono-border)" : "transparent" }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo — name in serif */}
        <Link
          href="/"
          className="text-lg transition-opacity duration-200 hover:opacity-70"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--mono-text)",
          }}
        >
          Reehan Ahmed
        </Link>

        {/* Desktop Navigation — minimal */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/work"
            className="text-sm transition-colors duration-200 hover:text-[var(--mono-text)]"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              color: isActive("/work") ? "var(--mono-text)" : "var(--mono-muted)",
              letterSpacing: "0.01em",
            }}
          >
            Work
          </Link>
          <Link
            href="/writing"
            className="text-sm transition-colors duration-200 hover:text-[var(--mono-text)]"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              color: isActive("/writing") ? "var(--mono-text)" : "var(--mono-muted)",
              letterSpacing: "0.01em",
            }}
          >
            Writing
          </Link>
          <Link
            href="/projects"
            className="text-sm transition-colors duration-200 hover:text-[var(--mono-text)]"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              color: isActive("/projects") ? "var(--mono-text)" : "var(--mono-muted)",
              letterSpacing: "0.01em",
            }}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-sm transition-colors duration-200 hover:text-[var(--mono-text)]"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              color: isActive("/about") ? "var(--mono-text)" : "var(--mono-muted)",
              letterSpacing: "0.01em",
            }}
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 -mr-2 transition-colors duration-200"
          style={{ color: "var(--mono-text)" }}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100 border-b"
            : "max-h-0 opacity-0"
        }`}
        style={{
          backgroundColor: "var(--mono-bg)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-5">
          <Link
            href="/work"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base transition-colors duration-200 hover:text-[var(--mono-text)]"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              color: isActive("/work") ? "var(--mono-text)" : "var(--mono-muted)",
            }}
          >
            Work
          </Link>
          <Link
            href="/writing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base transition-colors duration-200 hover:text-[var(--mono-text)]"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              color: isActive("/writing") ? "var(--mono-text)" : "var(--mono-muted)",
            }}
          >
            Writing
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base transition-colors duration-200 hover:text-[var(--mono-text)]"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              color: isActive("/projects") ? "var(--mono-text)" : "var(--mono-muted)",
            }}
          >
            Projects
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base transition-colors duration-200 hover:text-[var(--mono-text)]"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              color: isActive("/about") ? "var(--mono-text)" : "var(--mono-muted)",
            }}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
