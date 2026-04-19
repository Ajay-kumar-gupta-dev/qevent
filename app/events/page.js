"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  const searchParams = useSearchParams();

  const artistName = searchParams.get("artist");
  const tagName = searchParams.get("tag");

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("https://qevent-backend.labs.crio.do/events");
      const data = await res.json();

      let filtered = data;

      // ✅ Filter by artist
      if (artistName) {
        filtered = filtered.filter(
          (event) =>
            event.artist.toLowerCase() === artistName.toLowerCase()
        );
      }

      // ✅ Filter by tag
      if (tagName) {
        filtered = filtered.filter((event) =>
          event.tags.some(
            (tag) =>
              (tag.name || tag).toLowerCase() === tagName.toLowerCase()
          )
        );
      }

      setEvents(filtered);
    };

    fetchEvents();
  }, [artistName, tagName]);

  return (
    <div className="p-6 flex flex-col items-center">

      {/* Heading */}
      {artistName && (
        <h2 className="text-2xl font-bold mb-4">
          Events by {artistName}
        </h2>
      )}

      {tagName && (
        <h2 className="text-2xl font-bold mb-4">
          Events for #{tagName}
        </h2>
      )}

      {/* Events */}
      <div className="flex flex-wrap justify-center gap-6">
        {events.map((event, index) => (
          <EventCard key={event?.id || index} event={event} />
        ))}
      </div>

      {/* No data */}
      {events.length === 0 && (
        <p className="mt-6 text-gray-500">No events found.</p>
      )}
    </div>
  );
}