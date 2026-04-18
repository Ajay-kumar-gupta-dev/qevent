"use client";

import { useRouter } from "next/navigation";

const ArtistCard = ({ artist }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/events?artist=${encodeURIComponent(artist.name)}`);
  };

  return (
    <div className="w-full max-w-[260px] mx-auto text-center border border-slate-300 rounded-md p-5 shadow-sm hover:shadow-md transition hover:scale-105">

      <img
        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
        src={artist.image}
        alt={artist.name}
      />

      <p className="text-gray-500 text-sm">{artist.location}</p>
      <h2 className="text-lg font-bold mt-1">{artist.name}</h2>

      <p className="text-sm text-gray-600">
        {artist.description || artist.specialization}
      </p>

      <button
        onClick={handleClick}
        className="mt-4 bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md text-sm hover:opacity-80"
      >
        View Events
      </button>

    </div>
  );
};

export default ArtistCard;