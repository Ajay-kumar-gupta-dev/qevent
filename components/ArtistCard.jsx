"use client";

import { useRouter } from "next/navigation";

const ArtistCard = ({ artist }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/events?artist=${encodeURIComponent(artist.name)}`);
  };

  return (
    <div className="border p-4 rounded-md text-center">
      <img
        src={artist.image}
        alt={artist.name}
        className="w-20 h-20 rounded-full mx-auto"
      />

      <h2 className="font-bold">{artist.name}</h2>

      <button
        onClick={handleClick}
        className="mt-3 bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md"
      >
        View Events
      </button>
    </div>
  );
};

export default ArtistCard;