import { useTranslation } from "react-i18next"

const Recent = () => {
  const { t } = useTranslation()
  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-center items-center overflow-hidden" style={{ background: "linear-gradient(145deg, rgba(239,246,255,0.97) 0%, rgba(219,234,254,0.97) 50%, rgba(239,246,255,0.97) 100%)", backdropFilter: "blur(12px)" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 1, 2].map((i) => (
          <div key={i} className="absolute rounded-full border border-blue-400/20"
            style={{
              width: `${220 + i * 110}px`,
              height: `${220 + i * 110}px`,
              animation: `ping 3s cubic-bezier(0,0,0.2,1) infinite`,
              animationDelay: `${i * 0.8}s`,
              opacity: 0.5 - i * 0.12,
            }} />
        ))}
      </div>

      <div className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          filter: "blur(30px)",
        }} />

      <div className="relative mb-5">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            boxShadow: "0 8px 32px rgba(59,130,246,0.35), 0 0 0 1px rgba(255,255,255,0.6)",
          }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-white" style={{ animation: "pulse 2s infinite" }} />
      </div>

      <div className="relative text-center px-6">
        <p className="text-xs font-semibold uppercase text-blue-500 mb-2" style={{ letterSpacing: "0.25em" }}>{t("Yangi imkoniyat")}</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-3" style={{ letterSpacing: "-0.02em" }}>{t("Tez kunda")}</h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-xs mx-auto leading-relaxed">{t("Ushbu bo'lim hozirda tayyorlanmoqda!")}</p>
      </div>

      <div className="relative mt-6 flex items-center gap-3">
        <div className="w-12 h-px bg-linear-to-r from-transparent to-blue-400/40" />
        <div className="w-2 h-2 rounded-full bg-blue-400/70" />
        <div className="w-12 h-px bg-linear-to-l from-transparent to-blue-400/40" />
      </div>
    </div>
  )
}

export default Recent