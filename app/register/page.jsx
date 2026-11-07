"use client";

import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import Image from "next/image";
import RegisterButton from "@/components/RegisterButton";
import { useAuthAction } from "@/hooks/useAuthAction";

export default function RegisterPage() {
  const { user, loginWithGoogle, loginWithGithub, loading } = useAuth();
  const router = useRouter();
  const { error, executeAuth } = useAuthAction();

  const authOptions = useMemo(
    () => [
      { id: "mail", provider: "Correo", icon: "icon-mail" },
      {
        id: "google",
        provider: "Google",
        icon: "icon-google",
        onClick: () => executeAuth(loginWithGoogle, "Google"),
      },
      {
        id: "github",
        provider: "GitHub",
        icon: "icon-github",
        onClick: () => executeAuth(loginWithGithub, "GitHub"),
      },
      { id: "apple", provider: "Apple", icon: "icon-apple" },
      { id: "microsoft", provider: "Microsoft", icon: "icon-microsoft" },
    ],
    [loginWithGoogle, loginWithGithub, executeAuth],
  );

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
          Crea una cuenta para sincronizar y ver videos con tus amigos
        </p>

        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm font-medium transition-all">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-3 w-full max-w-sm mx-auto mt-2">
          {authOptions.map((option) => (
            <RegisterButton
              key={option.id}
              provider={option.provider}
              icon={option.icon}
              onClick={option.onClick}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center items-center gap-1 text-sm text-gray-400">
          <span>¿Ya tienes una cuenta?</span>
          <Link
            href="/login"
            className="text-white hover:underline font-semibold transition-all"
          >
            Inicia Sesión
          </Link>
        </div>
      </div>
    </main>
  );
}
