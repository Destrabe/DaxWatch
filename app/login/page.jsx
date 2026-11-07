"use client";

import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function LoginPage() {
  const { user, loginWithGoogle, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212] text-white">
        Cargando...
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#121212] text-white p-4">
      <div className="bg-[#1E1E1E] p-8 rounded-xl shadow-2xl w-full max-w-md text-center border border-gray-800">
        <div className="flex items-center justify-center gap-4 mb-6 select-none">
          <Image
            src="/logo.webp"
            alt="DaxWatch Logo"
            width={72}
            height={72}
            priority
            className="object-contain"
          />
          <span className="text-4xl font-black tracking-tight text-white">
            Dax<span style={{ color: "#61c4a5" }}>Watch</span>
          </span>
        </div>

        <p className="text-gray-400 mb-6 text-sm">
          Inicia sesión para sincronizar y ver videos con tus amigos
        </p>

        <div className="space-y-3">
          <button className="w-full bg-[#2A2A2A] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#333333] transition-colors flex items-center justify-center gap-3 border border-gray-700 shadow-md">
            <svg className="w-5 h-5 text-gray-300">
              <use href="/sprite.svg#icon-mail" />
            </svg>
            <span>Continuar con Correo</span>
          </button>

          <button
            onClick={loginWithGoogle}
            className="w-full bg-white text-black font-semibold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 shadow-md"
          >
            <svg className="w-5 h-5">
              <use href="/sprite.svg#icon-google" />
            </svg>
            <span>Continuar con Google</span>
          </button>

          <button className="w-full bg-[#24292e] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#2f363d] transition-colors flex items-center justify-center gap-3 border border-gray-700 shadow-md">
            <svg className="w-5 h-5 text-white">
              <use href="/sprite.svg#icon-github" />
            </svg>
            <span>Continuar con GitHub</span>
          </button>

          <button className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-3 border border-gray-700 shadow-md">
            <svg className="w-5 h-5 text-white">
              <use href="/sprite.svg#icon-apple" />
            </svg>
            <span>Continuar con Apple</span>
          </button>

          <button className="w-full bg-[#2f2f2f] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#3a3a3a] transition-colors flex items-center justify-center gap-3 border border-gray-700 shadow-md">
            <svg className="w-4.5 h-4.5" viewBox="0 0 21 21">
              <use href="/sprite.svg#icon-microsoft" />
            </svg>
            <span>Continuar con Microsoft</span>
          </button>
        </div>
      </div>
    </main>
  );
}
