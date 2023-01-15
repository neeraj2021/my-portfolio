import React from "react";

function TechNameIcon({ src, title }) {
  return (
    <div className="flex items-center gap-2 bg-cream p-2">
      <img src={src} className="h-5 w-5" alt="vjdknv kjdnkj ndkj nkjfd" />
      <span className="font-semibold text-lg">{title}</span>
    </div>
  );
}

export default TechNameIcon;
