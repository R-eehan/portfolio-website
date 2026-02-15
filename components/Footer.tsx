import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 md:py-16 border-t"
      style={{
        backgroundColor: "var(--mono-bg)",
        borderColor: "var(--mono-border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left side */}
          <div>
            <Link
              href="/"
              className="text-lg mb-2 block transition-opacity duration-200 hover:opacity-70"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--mono-text)",
              }}
            >
              Reehan Ahmed
            </Link>
            <p
              className="text-sm"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--mono-muted)",
              }}
            >
              Platform PM at Whatfix
            </p>
          </div>

          {/* Right side — links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <p
                className="text-xs tracking-[0.1em] uppercase mb-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                Navigate
              </p>
              <Link
                href="/work"
                className="text-sm transition-colors duration-200 hover:text-[var(--mono-text)]"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--mono-muted)",
                }}
              >
                Work
              </Link>
              <Link
                href="/projects"
                className="text-sm transition-colors duration-200 hover:text-[var(--mono-text)]"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--mono-muted)",
                }}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-sm transition-colors duration-200 hover:text-[var(--mono-text)]"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--mono-muted)",
                }}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm transition-colors duration-200 hover:text-[var(--mono-text)]"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--mono-muted)",
                }}
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p
                className="text-xs tracking-[0.1em] uppercase mb-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                Connect
              </p>
              <a
                href="https://www.linkedin.com/in/reehan-ahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200 hover:text-[var(--mono-text)] inline-flex items-center gap-1.5"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--mono-muted)",
                }}
              >
                LinkedIn
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="mailto:ahmedreehan838@gmail.com"
                className="text-sm transition-colors duration-200 hover:text-[var(--mono-text)]"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--mono-muted)",
                }}
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="mt-12 pt-6 border-t"
          style={{ borderColor: "var(--mono-border)" }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--mono-accent)",
            }}
          >
            &copy; {currentYear} Reehan Ahmed
          </p>
        </div>
      </div>
    </footer>
  );
}
