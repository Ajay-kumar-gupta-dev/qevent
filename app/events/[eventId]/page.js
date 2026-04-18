// app/events/[eventId]/page.js

async function getEvent(eventId) {
  const res = await fetch(
    `https://qevent-backend.labs.crio.do/events/${eventId}`,
    { cache: "no-store" }
  );

  return res.json();
}

export default async function EventDetails({ params }) {
  const event = await getEvent(params.eventId);

  return (
    <div className="p-8 max-w-5xl mx-auto">

      {/* Image */}
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-[300px] object-cover rounded-md mb-6"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold text-orange-500">
        {event.name}
      </h1>

      {/* Location + Artist */}
      <p className="text-lg text-gray-600 mt-2">
        {event.location}
      </p>
      <p className="text-md text-gray-700">{event.artist}</p>

      {/* Tags */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {event.tags?.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-400 to-teal-600 text-white text-sm"
          >
            #{tag.name || tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="mt-6 text-gray-700 leading-relaxed">
        {event.description ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque placeat architecto dolorem inventore ex eius recusandae quod perspiciatis voluptatum maxime porro soluta repellat tempore accusamus."}
      </p>

      {/* Price + Button */}
      <div className="flex justify-between items-center mt-8">
        <h2 className="text-3xl font-bold text-orange-500">
          ${event.price}
        </h2>

        <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:opacity-80">
          Buy Tickets
        </button>
      </div>

    </div>
  );
}