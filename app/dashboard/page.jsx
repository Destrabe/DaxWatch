import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-8 lg:p-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Salas de DaxWatch
          </h1>
          <p className="text-gray-400 mt-1">
            Gestiona tus espacios o únete a transmisiones públicas.
          </p>
        </div>

        <Link
          href="/room/nueva"
          className="bg-[#61c4a5] text-black font-extrabold py-3 px-6 rounded-lg hover:bg-[#4eb394] transition-colors shadow-lg flex items-center gap-2"
        >
          <svg className="w-5 h-5">
            <use href="/sprite.svg#icon-plus" />
          </svg>
          Crear Nueva Sala
        </Link>
      </header>

      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-6 text-gray-200 flex items-center gap-2">
          <svg className="w-6 h-6 text-[#61c4a5]">
            <use href="/sprite.svg#icon-my-rooms" />
          </svg>
          Mis Salas
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <Link
            href="/room/privada-1"
            className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-5 hover:border-[#61c4a5] transition-colors cursor-pointer group block"
          >
            <div className="bg-black rounded-lg h-32 mb-4 flex items-center justify-center text-gray-600 relative overflow-hidden">
              <span className="z-10 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-gray-500">
                  <use href="/sprite.svg#icon-lock" />
                </svg>
              </span>
              <div className="absolute top-3 right-3 bg-[#121212] px-2 py-1 rounded text-xs font-bold text-gray-400 flex items-center gap-1 border border-gray-800">
                Privada
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-white">
                  Cine con Amigos
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Acceso solo con enlace
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/room/publica-1"
            className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-5 hover:border-[#61c4a5] transition-colors cursor-pointer group block"
          >
            <div className="bg-black rounded-lg h-32 mb-4 flex items-center justify-center text-gray-600 relative overflow-hidden">
              <span className="z-10 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-[#61c4a5]">
                  <use href="/sprite.svg#icon-play" />
                </svg>
              </span>
              <div className="absolute top-3 right-3 bg-[#121212] px-2 py-1 rounded text-xs font-bold text-[#61c4a5] flex items-center gap-1 border border-[#61c4a5]/30">
                Pública
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-white">
                  Maratón de Terror
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Visible en la comunidad
                </p>
              </div>
              <div className="bg-[#2A2A2A] px-3 py-1 rounded-full text-xs font-bold text-[#61c4a5] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#61c4a5] rounded-full animate-pulse"></span>
                2 online
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6 text-gray-200 flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-400">
            <use href="/sprite.svg#icon-explore" />
          </svg>
          Explorar Salas Públicas
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <Link
            href="/room/comunidad-1"
            className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors cursor-pointer group block"
          >
            <div className="bg-black rounded-lg h-40 mb-4 flex items-center justify-center text-gray-600 relative overflow-hidden">
              <span className="z-10 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-blue-400">
                  <use href="/sprite.svg#icon-play" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-linear-to-t from-[#121212] to-transparent opacity-60"></div>
              <div className="absolute top-3 left-3 bg-red-500/20 text-red-500 border border-red-500/30 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>{" "}
                EN VIVO
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-white">
                  Noche de Anime Clásico
                </h3>
                <p className="text-sm text-gray-400 mt-1">Host: @OtakuDax</p>
              </div>
              <div className="bg-[#2A2A2A] px-3 py-1 rounded-full text-xs font-bold text-blue-400 flex items-center gap-2">
                128 online
              </div>
            </div>
          </Link>

          <Link
            href="/room/comunidad-2"
            className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors cursor-pointer group block"
          >
            <div className="bg-black rounded-lg h-40 mb-4 flex items-center justify-center text-gray-600 relative overflow-hidden">
              <span className="z-10 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-blue-400">
                  <use href="/sprite.svg#icon-play" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-linear-to-t from-[#121212] to-transparent opacity-60"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-white">
                  Música Lofi & Chill
                </h3>
                <p className="text-sm text-gray-400 mt-1">Host: @LofiGirl</p>
              </div>
              <div className="bg-[#2A2A2A] px-3 py-1 rounded-full text-xs font-bold text-blue-400 flex items-center gap-2">
                45 online
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
