import Link from "next/link";

interface CaseStudyNavProps {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export function CaseStudyNav({ prev, next }: CaseStudyNavProps) {
  return (
    <nav
      className="mt-16 pt-8 border-t grid gap-4"
      style={{
        borderColor: "var(--mono-border)",
        gridTemplateColumns: prev && next ? "1fr 1fr" : "1fr",
      }}
    >
      {prev && (
        <Link
          href={`/work/${prev.slug}`}
          className="group p-6 rounded-lg border transition-all duration-300 hover:border-[#555555]"
          style={{
            backgroundColor: "var(--mono-surface)",
            borderColor: "var(--mono-border)",
          }}
        >
          <p
            className="text-xs mb-2 flex items-center gap-2"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--mono-muted)",
            }}
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Previous
          </p>
          <p
            className="text-base group-hover:text-white transition-colors"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--mono-muted)",
            }}
          >
            {prev.title}
          </p>
        </Link>
      )}

      {next && (
        <Link
          href={`/work/${next.slug}`}
          className={`group p-6 rounded-lg border transition-all duration-300 hover:border-[#555555] ${
            !prev ? "ml-auto" : ""
          }`}
          style={{
            backgroundColor: "var(--mono-surface)",
            borderColor: "var(--mono-border)",
            textAlign: prev ? "right" : "left",
          }}
        >
          <p
            className="text-xs mb-2 flex items-center gap-2 justify-end"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--mono-muted)",
              justifyContent: prev ? "flex-end" : "flex-start",
            }}
          >
            Next
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </p>
          <p
            className="text-base group-hover:text-white transition-colors"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--mono-muted)",
            }}
          >
            {next.title}
          </p>
        </Link>
      )}
    </nav>
  );
}
