export default function LoginButton({ provider, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 flex items-center justify-center bg-[#2b2b2b] border border-gray-700 rounded-full hover:bg-[#3b3b3b] hover:border-gray-500 transition-all group"
      aria-label={`Iniciar sesión con ${provider}`}
    >
      <svg className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity">
        <use href={`/sprite.svg#${icon}`} />
      </svg>
    </button>
  );
}
