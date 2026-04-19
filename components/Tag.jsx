"use client";

import { useRouter } from "next/navigation";

const Tag = ({ text }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/events?tag=${encodeURIComponent(text)}`);
  };

  return (
    <span
      onClick={handleClick}
      className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-orange-400 to-teal-600 text-white cursor-pointer hover:scale-105 transition"
    >
      #{text}
    </span>
  );
};

export default Tag;