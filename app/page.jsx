"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <button
        onClick={() => router.push("/dashboard")}
        className="bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-gray-200 transition-colors shadow-lg text-lg"
      >
        Ir al Dashboard
      </button>
    </main>
  );
}
