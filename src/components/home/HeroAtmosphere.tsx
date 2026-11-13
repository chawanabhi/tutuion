export function HeroAtmosphere() {
  const particles = Array.from({ length: 18 }, (_, index) => index);
  const papers = [
    { top: "20%", left: "58%", delay: "0s" },
    { top: "48%", left: "72%", delay: "-3s" },
    { top: "62%", left: "52%", delay: "-6s" },
  ];
  const stationery = [
    { className: "hero-pencil", top: "36%", left: "78%", delay: "-2s" },
    { className: "hero-notebook", top: "68%", left: "82%", delay: "-5s" },
  ];

  return (
    <>
      {particles.map((particle) => (
        <span
          key={particle}
          className="particle hidden md:block"
          style={{
            left: `${12 + ((particle * 17) % 75)}%`,
            top: `${18 + ((particle * 23) % 60)}%`,
            animationDuration: `${7 + (particle % 5)}s`,
            animationDelay: `-${particle * 0.45}s`,
          }}
          aria-hidden="true"
        />
      ))}

      {papers.map((paper) => (
        <span
          key={paper.delay}
          className="paper-sheet hidden sm:block"
          style={{
            top: paper.top,
            left: paper.left,
            animationDelay: paper.delay,
          }}
          aria-hidden="true"
        />
      ))}

      {stationery.map((item) => (
        <span
          key={item.className}
          className={`${item.className} hidden md:block`}
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
