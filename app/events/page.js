// app/events/page.js

import EventCard from "@/components/EventCard";

async function getEvents() {
  const res = await fetch("https://qevent-backend.labs.crio.do/events", {
    cache: "no-store",
  });

  return res.json();
}

export default async function EventsPage({ searchParams }) {
  const events = await getEvents();

  const artistName = searchParams?.artist;
  const tagName = searchParams?.tag;

  let filtered = events;

  // Filter by artist
  if (artistName) {
    filtered = filtered.filter(
      (event) =>
        event.artist.toLowerCase() === artistName.toLowerCase()
    );
  }

  // Filter by tag
  if (tagName) {
    filtered = filtered.filter((event) =>
      event.tags.some(
        (tag) =>
          (tag.name || tag).toLowerCase() === tagName.toLowerCase()
      )
    );
  }

  return (
    <div className="p-6 flex flex-col items-center">

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

      <div className="flex flex-wrap justify-center gap-6">
        {filtered.map((event, index) => (
          <EventCard key={event?.id || index} event={event} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-6 text-gray-500">No events found.</p>
      )}
    </div>
  );
}