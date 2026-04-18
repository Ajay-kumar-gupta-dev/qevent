// app/tags/page.js

import Tag from "@/components/Tag";

async function getTags() {
  const res = await fetch("https://qevent-backend.labs.crio.do/tags", {
    cache: "no-store",
  });

  return res.json();
}

export default async function TagsPage() {
  const tags = await getTags();

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <h2 className="text-2xl font-bold text-center mb-8">
        Explore Tags
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {tags.map((tag) => (
          <Tag key={tag.id} text={tag.name} />
        ))}
      </div>

    </div>
  );
}