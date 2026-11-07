export default function RegisterButton({ provider, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex justify-center items-center py-3 bg-[#2b2b2b] hover:bg-[#3b3b3b] text-white rounded-lg transition-colors border border-gray-700"
    >
      <div className="flex items-center gap-3 justify-start w-60">
        <svg className="w-5 h-5 shrink-0">
          <use href={`/sprite.svg#${icon}`} />
        </svg>
        <span className="font-semibold text-base whitespace-nowrap">
          Registrarse con {provider}
        </span>
      </div>
    </button>
  );
}
