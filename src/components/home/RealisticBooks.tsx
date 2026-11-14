import type { CSSProperties } from "react";

type BookConfig = {
  className: string;
  variant?: "navy" | "burgundy" | "forest" | "sand";
  open?: boolean;
  style?: CSSProperties;
};

const BOOKS: BookConfig[] = [
  {
    className: "top-[18%] right-[10%] hidden sm:block",
    variant: "navy",
    style: {
      ["--px" as string]: "28px",
      ["--py" as string]: "16px",
      animationDelay: "0s",
    },
  },
  {
    className: "top-[28%] right-[28%] hidden md:block",
    variant: "burgundy",
    style: {
      ["--px" as string]: "18px",
      ["--py" as string]: "22px",
      animationDelay: "-2s",
      width: "4.4rem",
      height: "6.1rem",
    },
  },
  {
    className: "bottom-[22%] right-[16%]",
    variant: "forest",
    open: true,
    style: {
      ["--px" as string]: "12px",
      ["--py" as string]: "10px",
      animationDelay: "-3.5s",
    },
  },
  {
    className: "top-[42%] right-[42%] hidden lg:block",
    variant: "sand",
    style: {
      ["--px" as string]: "22px",
      ["--py" as string]: "14px",
      animationDelay: "-1.2s",
      width: "3.8rem",
      height: "5.2rem",
      opacity: 0.8,
    },
  },
  {
    className: "bottom-[30%] right-[38%] hidden xl:block",
    variant: "navy",
    style: {
      ["--px" as string]: "16px",
      ["--py" as string]: "18px",
      animationDelay: "-5s",
      width: "4.2rem",
      height: "5.8rem",
    },
  },
];

export function RealisticBooks() {
  return (
    <>
      {BOOKS.map((book, index) => (
        <div
          key={index}
          className={`book-real ${book.open ? "is-open" : ""} ${book.className}`}
          data-variant={book.variant ?? "navy"}
          style={book.style}
          aria-hidden="true"
        >
          <div className="spine" />
          <div className="back" />
          {book.open ? <div className="page-turn" /> : null}
          <div className="pages-block" />
          <div className="cover" />
        </div>
      ))}
    </>
  );
}
