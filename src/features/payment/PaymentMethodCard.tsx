import { useState } from "react";
import type { PaymentMethod } from "../../interfaces/PaymentMethod";

interface Props {
    method: PaymentMethod;
}

export function PaymentMethodCard({ method }: Props) {
const [copied, setCopied]= useState(false);

const handleCopy =()=>{
    //copiar el numero de cuenta
    navigator.clipboard.writeText(method.accountNumber || "");
    setCopied(true);
    setTimeout(()=>setCopied(false), 2000);
}

    // Función para formatear el número de cuenta en grupos de 4 (como tarjeta real)
    const formatNumber = (num?: string) => {
        if (!num) return "";
        return num.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
    };

    return (
        <div className="group relative aspect-video w-full max-w-sm rounded-2xl bg-linear-to-br from-gray-800 via-gray-900 to-black p-6 shadow-2xl border border-white/10 transition-all hover:scale-105 hover:shadow-blue-500/20">
            {/* Chip de la tarjeta (Efecto visual) */}
            <div className="mb-4 h-10 w-12 rounded-lg bg-linear-to-br from-yellow-200 to-yellow-500 opacity-80 shadow-inner"></div>

            {/* Información del Banco */}
            <div className="absolute top-6 right-6 text-right">
                <span className="text-sm font-bold tracking-widest text-white/50 uppercase">
                    {method.bank || "BANCO"}
                </span>
            </div>

            {/* Número de Cuenta */}
            <div className="mt-8 mb-6">
                <p className="text-lg md:text-xl font-mono font-bold tracking-widest text-white whitespace-nowrap overflow-hidden">
                    {formatNumber(method.accountNumber) || "0000 0000 0000 0000"}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-blue-400">
                    Número de Cuenta / CLABE
                </p>
            </div>

            {/* Titular y Botón de Acción */}
            <div className="flex items-end justify-between">
                <div>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-gray-500">
                        Titular de la cuenta
                    </p>
                    <p className="text-sm font-bold text-white uppercase tracking-tight">
                        {method.accountName || "NOMBRE DEL TITULAR"}
                    </p>
                </div>

                {/* Botón de Copiar (Tú le pones la lógica) */}
                <button onClick={()=>handleCopy()} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-blue-600 active:scale-95">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>
                </button>
            </div>
        </div>
    );
}