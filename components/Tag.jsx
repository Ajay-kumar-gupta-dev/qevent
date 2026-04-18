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
      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-orange-400 to-teal-600 text-white hover:scale-105 transition cursor-pointer"
    >
      #{text}
    </span>
  );
};

export default Tag;