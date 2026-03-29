import { AlertCircle } from 'lucide-react'
import { type FC } from 'react'
import type { PageProps } from './types'

const ErrorPage:FC<PageProps> = ({ title = "XATOLIK", message = "Ma'lumot yuklashda xatolik yuz berdi" }) => {
return (
    <div className="absolute inset-0 z-10 flex flex-col justify-center items-center overflow-hidden" style={{ background: "linear-gradient(145deg, rgba(239,246,255,0.97) 0%, rgba(219,234,254,0.97) 50%, rgba(239,246,255,0.97) 100%)", backdropFilter: "blur(12px)"}}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 1, 2].map((i) => (
          <div key={i} className="absolute rounded-full border border-blue-400/20"
            style={{
              width: `${220 + i * 110}px`,
              height: `${220 + i * 110}px`,
              animation: `ping 3s cubic-bezier(0,0,0.2,1) infinite`,
              animationDelay: `${i * 0.8}s`,
              opacity: 0.5 - i * 0.12,
            }}/>
        ))}
      </div>
      <div className="absolute w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", filter: "blur(30px)" }}/>
      <div className="relative mb-5">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)", boxShadow: "0 8px 32px rgba(239,68,68,0.35), 0 0 0 1px rgba(255,255,255,0.6)" }}>
          <AlertCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
        </div>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-orange-400 border-2 border-white" style={{ animation: "pulse 2s infinite" }}/>
      </div>

      <div className="relative text-center px-6">
        <p className="text-xs font-semibold uppercase text-red-500 mb-2" style={{ letterSpacing: "0.25em" }}>{title}</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-3" style={{ letterSpacing: "-0.02em" }}>{message}</h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-xs mx-auto leading-relaxed">Iltimos, qaytadan urinib ko'ring yoki keyinroq qayta kiring</p>
      </div>
        {/* <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
          Qaytadan urinish
        </Button> */}

      <div className="relative mt-6 flex items-center gap-3">
        <div className="w-12 h-px bg-linear-to-r from-transparent to-blue-400/40" />
        <div className="w-2 h-2 rounded-full bg-blue-400/70" />
        <div className="w-12 h-px bg-linear-to-l from-transparent to-blue-400/40" />
      </div>
    </div>
)
}

export default ErrorPage