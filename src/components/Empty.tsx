import type { FC } from "react"
import { useTranslation } from "react-i18next"
import type { PageProps } from "./types"

const Empty:FC<PageProps> = ({ title = "Ma'lumot mavjud emas", message = "" }) => {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col items-center justify-center min-h-64 h-full w-full rounded-md bg-white">
            <div className="relative mb-6">
                <div className="sm:w-24 sm:h-24 w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                    <svg className="sm:w-12 sm:h-12 w-10 h-10  text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
            </div>
            <h3 className="text-[15px] font-semibold text-gray-800 mb-1">{ t(title || "Ma'lumot mavjud emas")}</h3>
            {message && <p className="text-sm text-gray-400 text-center leading-relaxed">{t(message)}</p>}
        </div>
    )
}

export default Empty