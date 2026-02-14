"use client";

import { useState, ReactNode } from "react";

interface TechnicalToggleProps {
  title: string;
  children: ReactNode;
}

export function TechnicalToggle({ title, children }: TechnicalToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="my-8 rounded-lg border overflow-hidden"
      style={{
        backgroundColor: "var(--mono-surface)",
        borderColor: "var(--mono-border)",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-200 hover:bg-[#2a2a2a]"
      >
        <div className="flex items-center gap-3">
          <span
            className="text-xs px-2 py-1 rounded"
            style={{
              fontFamily: "var(--font-mono)",
              backgroundColor: "var(--mono-bg)",
              color: "var(--mono-muted)",
            }}
          >
            Deep dive
          </span>
          <span
            className="text-base"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              color: "var(--mono-text)",
            }}
          >
            {title}
          </span>
        </div>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ color: "var(--mono-muted)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-6 pb-6 pt-2 border-t prose prose-invert max-w-none"
          style={{
            borderColor: "var(--mono-border)",
            color: "var(--mono-muted)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
