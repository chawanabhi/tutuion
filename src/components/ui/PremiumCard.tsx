import type { ReactNode } from "react";

type PremiumCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  index?: string;
};

export function PremiumCard({
  title,
  description,
  icon,
  className = "",
  index,
}: PremiumCardProps) {
  return (
    <article className={`editorial-panel h-full p-7 sm:p-8 ${className}`.trim()}>
      {index ? <p className="objective-index">{index}</p> : null}
      {icon ? (
        <div
          className="mb-5 grid h-12 w-12 place-items-center rounded-[0.7rem] bg-gradient-to-br from-deep-blue to-midnight text-champagne-bright shadow-[0_12px_28px_rgba(7,20,38,0.25)]"
          aria-hidden="true"
        >
          {icon}
        </div>
      ) : null}
      <h3 className="font-display text-2xl text-midnight sm:text-[1.7rem]">
        {title}
      </h3>
      <p className="mt-3 leading-relaxed text-ink-soft">{description}</p>
    </article>
  );
}
