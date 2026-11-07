import Link from "next/link";
import ChatPanel from "../../../components/ChatPanel";

export default function RoomPage({ params }) {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <header className="h-16 bg-[#0a0a0a] border-b border-gray-800 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6">
              <use href="/sprite.svg#icon-back" />
            </svg>
          </Link>
          <h1 className="text-white font-bold text-lg">
            Noche de Anime{" "}
            <span className="text-gray-500 text-sm font-normal ml-2">
              #Sala-{params.id}
            </span>
          </h1>
        </div>
        <button className="bg-[#1E1E1E] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#2a2a2a] border border-gray-700">
          Invitar Amigos
        </button>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <section className="flex-1 bg-black flex items-center justify-center p-4 relative">
          <div className="w-full max-w-5xl aspect-video bg-[#121212] rounded-xl border border-gray-800 flex items-center justify-center shadow-2xl relative overflow-hidden group">
            <svg className="w-20 h-20 text-[#61c4a5] opacity-50 group-hover:opacity-100 transition-opacity cursor-pointer">
              <use href="/sprite.svg#icon-play" />
            </svg>
            <p className="absolute bottom-4 left-4 text-gray-500 font-medium">
              Esperando video...
            </p>
          </div>
        </section>

        <aside className="w-full lg:w-80 lg:min-w-[320px] bg-[#0a0a0a] border-l border-gray-800 flex flex-col h-[50vh] lg:h-auto">
          <ChatPanel />
        </aside>
      </div>
    </div>
  );
}
