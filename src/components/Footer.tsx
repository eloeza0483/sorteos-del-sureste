export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-4 mt-20">
            <div className="container mx-auto max-w-6xl">
                {/* Grid principal responsivo */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    
                    {/* Columna 1: Marca y descripción */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-white tracking-tight">
                            Sorteos <span className="text-blue-500">del Sureste</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed max-w-xs text-sm">
                            Participa y gana con la plataforma más confiable de la región. Transparencia y legalidad en cada sorteo.
                        </p>
                    </div>

                    {/* Columna 2: Navegación rápida */}
                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm font-secondary">
                            Navegación
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cómo funciona</a></li>
                            <li><a href="#tickets" className="text-gray-400 hover:text-blue-400 transition-colors">Ver Boletos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>

                    {/* Columna 3: Acción / Soporte */}
                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm font-secondary">
                            Ayuda
                        </h3>
                        <p className="text-gray-400 mb-6 text-sm">¿Dudas sobre tu pago o reserva?</p>
                        <a 
                            href="#" 
                            className="inline-block bg-blue-green-600/10 text-green-400 border border-blue-green/30 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition-all text-sm font-bold"
                        >   
                            WhatsApp Soporte
                        </a>
                    </div>
                </div>

                {/* Barra inferior: Copyright y Legal */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p className="text-gray-500">
                        <span className="text-blue-600 font-bold">© 2026 Sorteos del Sureste.</span> Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Términos y Condiciones</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Aviso de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
