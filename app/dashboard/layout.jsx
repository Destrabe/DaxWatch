import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex">
      <aside className="w-64 bg-[#1E1E1E] border-r border-gray-800 p-6 flex-col justify-between hidden md:flex">
        <div>
          <Link
            href="/dashboard"
            className="flex items-center gap-3 mb-10 select-none"
          >
            <Image
              src="/logo.webp"
              alt="DaxWatch"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-black tracking-tight text-white">
              Dax<span style={{ color: "#61c4a5" }}>Watch</span>
            </span>
          </Link>

          <nav className="space-y-2 text-gray-400 font-medium">
            <Link
              href="/dashboard"
              className="w-full flex items-center gap-3 text-white bg-[#2A2A2A] p-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5">
                <use href="/sprite.svg#icon-home" />
              </svg>
              Inicio
            </Link>
            <button className="w-full flex items-center gap-3 hover:text-white p-3 rounded-lg transition-colors">
              <svg className="w-5 h-5">
                <use href="/sprite.svg#icon-rooms" />
              </svg>
              Mis Salas
            </button>
            <button className="w-full flex items-center gap-3 hover:text-white p-3 rounded-lg transition-colors">
              <svg className="w-5 h-5">
                <use href="/sprite.svg#icon-friends" />
              </svg>
              Amigos
            </button>
          </nav>
        </div>

        <div className="border-t border-gray-800 pt-4">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-[#61c4a5] flex items-center justify-center text-black font-bold">
              U
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">
                Usuario Invitado
              </p>
              <p className="text-xs text-gray-500 truncate">modo@prueba.com</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
