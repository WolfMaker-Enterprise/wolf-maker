import React from "react";
import { ArrowUpRight } from "phosphor-react";

export default function Button({ word, href }) {
  return (
    <a
      className="inline-flex gap-2 rounded-full bg-[#9b26e3]/90 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(155,38,227,0.6)] transition hover:brightness-110"
      href={href}
    >
      <span className="items-center">{word}</span>
      <ArrowUpRight
        className="bg-white flex p-1 rounded-full text-pink-500"
        weight="bold"
        size={23}
      />
    </a>
  );
}
