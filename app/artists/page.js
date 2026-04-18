// app/artists/page.js

import ArtistCard from "@/components/ArtistCard";

async function getArtists() {
  const res = await fetch("https://qevent-backend.labs.crio.do/artists", {
    cache: "no-store",
  });

  const data = await res.json();
  return data;
}

export default async function ArtistsPage() {
  const artists = await getArtists();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* ✅ GRID FIX */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artists?.map((artist, index) => (
          <ArtistCard key={artist?.id || index} artist={artist} />
        ))}
      </div>
    </div>
  );
}