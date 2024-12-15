import React from "react";
import { category } from "../page";

export default function LinkButton(props: { category: category }) {
  const { category } = props;

  return (
    <div>
      <a
        id={`link-button-${category.id}`}
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href={`https://nextjs.org/docs?${category.url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {category.name}
      </a>
    </div>
  );
}
