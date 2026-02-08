"use client";

import { useState, useEffect } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  readingTime: number;
}

export function TableOfContents({ items, readingTime }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="hidden lg:block">
      <div className="sticky top-32">
        {/* Reading time */}
        <p
          className="text-xs mb-6"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--mono-accent)",
          }}
        >
          {readingTime} min read
        </p>

        {/* TOC heading */}
        <p
          className="text-xs tracking-[0.1em] uppercase mb-4"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--mono-accent)",
          }}
        >
          On this page
        </p>

        {/* TOC items */}
        <ul className="space-y-2.5">
          {items.map((item) => (
            <li
              key={item.id}
              style={{ paddingLeft: item.level === 3 ? "12px" : "0" }}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    setActiveId(item.id);
                  }
                }}
                className="block text-sm leading-snug transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-sans)",
                  color:
                    activeId === item.id
                      ? "var(--mono-text)"
                      : "var(--mono-muted)",
                  fontSize: item.level === 3 ? "0.8125rem" : "0.875rem",
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
