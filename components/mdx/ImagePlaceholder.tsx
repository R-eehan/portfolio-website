interface ImagePlaceholderProps {
  alt: string;
  caption?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "21:9";
}

const aspectRatioClasses = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  "21:9": "aspect-[21/9]",
};

export function ImagePlaceholder({
  alt,
  caption,
  aspectRatio = "16:9",
}: ImagePlaceholderProps) {
  return (
    <figure className="my-8">
      <div
        className={`${aspectRatioClasses[aspectRatio]} rounded-lg border flex flex-col items-center justify-center gap-3`}
        style={{
          backgroundColor: "var(--mono-surface)",
          borderColor: "var(--mono-border)",
        }}
      >
        <svg
          className="w-12 h-12"
          style={{ color: "var(--mono-accent)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p
          className="text-sm text-center px-4 max-w-md"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--mono-muted)",
          }}
        >
          {alt}
        </p>
      </div>
      {caption && (
        <figcaption
          className="mt-3 text-sm text-center"
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--mono-muted)",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
