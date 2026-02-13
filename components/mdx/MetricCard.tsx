interface MetricCardProps {
  value: string;
  label: string;
  context?: string;
}

export function MetricCard({ value, label, context }: MetricCardProps) {
  return (
    <div
      className="p-5 rounded-lg border my-3"
      style={{
        backgroundColor: "var(--mono-surface)",
        borderColor: "var(--mono-border)",
      }}
    >
      <p
        className="text-3xl md:text-4xl mb-2"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          color: "var(--mono-text)",
        }}
      >
        {value}
      </p>
      <p
        className="text-sm mb-1"
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          color: "var(--mono-text)",
        }}
      >
        {label}
      </p>
      {context && (
        <p
          className="text-xs"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--mono-muted)",
          }}
        >
          {context}
        </p>
      )}
    </div>
  );
}
