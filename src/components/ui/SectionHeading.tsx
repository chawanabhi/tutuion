type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowAlign =
    align === "center" ? "mx-auto justify-center" : "justify-start";
  const titleColor = light ? "text-white" : "text-midnight";
  const descColor = light ? "text-white/75" : "text-ink-soft";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className={`section-eyebrow ${eyebrowAlign}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`display-title ${titleColor}`}>{title}</h2>
      {description ? (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
