import { useState } from "react";

export function useAuthAction() {
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const executeAuth = async (authFunction, providerName) => {
    setError("");
    setIsProcessing(true);

    try {
      await authFunction();
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") {
        setIsProcessing(false);
        return;
      }

      console.error(`Error de autenticación con ${providerName}:`, err);

      switch (err.code) {
        case "auth/account-exists-with-different-credential":
          setError(
            "Ya existe una cuenta asociada a este correo con otro proveedor.",
          );
          break;
        case "auth/network-request-failed":
          setError("Error de red. Revisa tu conexión e inténtalo de nuevo.");
          break;
        default:
          setError(
            `Ocurrió un error al conectar con ${providerName}. Inténtalo más tarde.`,
          );
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return { error, setError, isProcessing, executeAuth };
}
