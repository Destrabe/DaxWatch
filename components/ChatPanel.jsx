"use client";

export default function ChatPanel() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-800 bg-[#121212]">
        <h3 className="text-white font-semibold flex items-center gap-2">
          Chat en vivo
          <span className="w-2 h-2 bg-[#61c4a5] rounded-full"></span>
        </h3>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm bg-[#0a0a0a]">
        <div className="flex flex-col">
          <span className="text-[#61c4a5] font-bold">Marco:</span>
          <span className="text-gray-300">¡Ya entré! ¿Qué vamos a ver?</span>
        </div>

        <div className="flex flex-col">
          <span className="text-blue-400 font-bold">Tú:</span>
          <span className="text-gray-300">
            Estaba pensando en poner la nueva peli.
          </span>
        </div>
      </div>

      <div className="p-4 bg-[#121212] border-t border-gray-800">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            className="flex-1 bg-[#1E1E1E] text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#61c4a5] placeholder-gray-500"
          />
          <button className="bg-[#61c4a5] text-black p-2 rounded-lg hover:bg-[#4eb394] transition-colors">
            <svg className="w-5 h-5">
              <use href="/sprite.svg#icon-send" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
