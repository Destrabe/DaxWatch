import "./globals.css";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "DaxWatch",
  description: "Sincroniza y mira videos con amigos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#121212] text-white">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
