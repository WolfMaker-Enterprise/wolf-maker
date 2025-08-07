import React from "react";

export default function HighText({ text }) {
  return (
    <span className="text-xs text-pink-500 bg-purple-950/50 font-semibold px-3 py-1 rounded-full tracking-widest uppercase">
      {text}
    </span>
  );
}
