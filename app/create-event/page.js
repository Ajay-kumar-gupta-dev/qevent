"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CreateEventPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // 🔒 Redirect if not logged in
  useEffect(() => {
    if (status === "loading") return; // wait for session
    if (!session) {
      router.push("/events"); // redirect to events
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <p className="text-center mt-10">Checking access...</p>;
  }

  // Optional: while redirecting, render nothing
  if (!session) return null;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Event</h1>

      {/* Simple placeholder UI */}
      <form className="flex flex-col gap-4">
        <input className="border p-2 rounded" placeholder="Event Name" />
        <input className="border p-2 rounded" placeholder="Location" />
        <input className="border p-2 rounded" placeholder="Date" />
        <textarea className="border p-2 rounded" placeholder="Description" />

        <button className="bg-gradient-to-r from-orange-400 to-teal-600 text-white py-2 rounded">
          Create Event
        </button>
      </form>
    </div>
  );
}