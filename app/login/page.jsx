"use client";

import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import LoginButton from "@/components/LoginButton";

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const socialOptions = useMemo(
    () => [
      { id: "google", provider: "Google", icon: "icon-google" },
      { id: "github", provider: "GitHub", icon: "icon-github" },
      { id: "apple", provider: "Apple", icon: "icon-apple" },
      { id: "microsoft", provider: "Microsoft", icon: "icon-microsoft" },
    ],
    [],
  );

  const handleEmailLogin = (e) => {
    e.preventDefault();
    console.log("Login con:", email, password);
  };

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
      <div className="bg-[#1E1E1E] p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-800">
        <div className="flex flex-col items-center justify-center mb-8 select-none">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/logo.webp"
              alt="DaxWatch Logo"
              width={48}
              height={48}
              priority
              className="object-contain"
            />
            <span className="text-3xl font-black tracking-tight text-white">
              Dax<span style={{ color: "#61c4a5" }}>Watch</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm">Bienvenido de nuevo</p>
        </div>

        <form onSubmit={handleEmailLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Correo Electrónico
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-500 shrink-0">
                  <use href="/sprite.svg#icon-email" />
                </svg>
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo"
                className="w-full pl-10 pr-4 py-2.5 bg-[#2b2b2b] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#61c4a5] focus:ring-1 focus:ring-[#61c4a5] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Contraseña
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-500 shrink-0">
                  <use href="/sprite.svg#icon-lock" />
                </svg>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                className="w-full pl-10 pr-4 py-2.5 bg-[#2b2b2b] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#61c4a5] focus:ring-1 focus:ring-[#61c4a5] transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-700 bg-[#2b2b2b] text-[#61c4a5] focus:ring-[#61c4a5] focus:ring-offset-[#1E1E1E]"
              />
              <span className="text-gray-300">Recordarme</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-[#61c4a5] hover:underline transition-all"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors mt-2"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-8 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative bg-[#1E1E1E] px-4 text-sm text-gray-400">
            O continuar con
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          {socialOptions.map((option) => (
            <LoginButton
              key={option.id}
              provider={option.provider}
              icon={option.icon}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center items-center gap-1 text-sm text-gray-400">
          <span>¿No tienes una cuenta?</span>
          <Link
            href="/register"
            className="text-white hover:underline font-semibold transition-all"
          >
            Regístrate
          </Link>
        </div>
      </div>
    </main>
  );
}
