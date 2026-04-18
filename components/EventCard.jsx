"use client";

import Tag from "./Tag";
import Link from "next/link";

const EventCard = ({ event }) => {
  if (!event) return null;

  return (
    <div className="w-[350px] border border-slate-300 rounded-md p-4 shadow-sm hover:shadow-md transition">

      {/* ✅ IMPORTANT: correct dynamic route */}
      <Link href={`/events/${event.id}`} className="block">

        {/* Image */}
        <img
          className="w-full h-48 object-cover mb-3 rounded-md"
          src={event.image}
          alt={event.name}
        />

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {event.tags?.map((tag, index) => (
            <Tag key={index} text={tag.name || tag} />
          ))}
        </div>

        {/* Date & Time */}
        <p className="mt-3 text-sm text-gray-500">
          {new Date(event.date).toDateString()} | {event.time}
        </p>

        {/* Location */}
        <p className="text-sm text-gray-600">{event.location}</p>

        {/* Title */}
        <h2 className="text-lg font-bold mt-1">{event.name}</h2>

        {/* Footer */}
        <div className="flex justify-between items-center mt-3">
          <p>{event.artist}</p>
          <p className="font-semibold">
            {event.price > 0
              ? `$${event.price.toLocaleString()}`
              : "FREE"}
          </p>
        </div>

      </Link>
    </div>
  );
};

export default EventCard;