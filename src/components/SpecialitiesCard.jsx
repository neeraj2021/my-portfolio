import React from "react";

function SpecialitiesCard({ iconSrc, title, description }) {
  return (
    <div className="bg-cream w-80 p-10 flex flex-col gap-y-3 shadow-md">
      <img src={iconSrc} className='h-7 w-7' alt="vjdknv kjdnkj ndkj nkjfd" />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default SpecialitiesCard;
