/**
 * HeroSection - Sección principal de la landing page
 * 
 * Esta es la primera sección que ve el usuario al entrar.
 * Incluye:
 * - Título principal llamativo
 * - Descripción del sorteo
 * - Call-to-Action (botón para ver boletos)
 * 
 * Analogía Laravel: Es como la sección principal de welcome.blade.php
 */
import gixxer from "../../assets/imgs/frente-gixxer.png"
import { CountdownTimer } from "./CountdownTimer"

export function HeroSection() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black py-20 px-4 relative overflow-hidden flex items-center">
            {/* Imagen de fondo - Gixxer centrada al 80% */}
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
                <img 
                    src={gixxer} 
                    alt="Gixxer" 
                    className="w-full h-full object-cover opacity-90 mix-blend-lighten"
                />
            </div>
            
            {/* Overlay de máscara para suavizar la integración y el fondo blanco */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-0"></div>
            
            {/* Brillo radial rojo para resaltar la moto */}
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.2),transparent_70%)] z-0"></div> */}


            <div className="container mx-auto max-w-4xl text-center relative z-10">
                {/* Badge superior */}
                <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
                    Sorteo Activo
                </div>

                {/* Título principal */}
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Gana el Premio de
                    <span className="block text-blue-500 mt-2">Tus Sueños</span>
                </h1>

                {/* Subtítulo/Descripción */}
                <p className="text-2xl md:text-2xl text-white mb-8">
                    Participa en nuestro sorteo exclusivo 2024
                </p>

                {/* EL CONTADOR VA AQUÍ */}
                <CountdownTimer />

                {/* Botones CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button className="bg-blue-600/80 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg border border-blue-400/30">
                        Ver Boletos Ahora
                    </button>
                    <button className="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-black transition-all backdrop-blur-lg">
                        Cómo Funciona
                    </button>
                </div>

                {/* Información del premio */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                    <div className="bg-white/5 backdrop-blur-lg border border-blue-600/30 rounded-lg p-6 hover:border-blue-600/50 transition-all">
                        <div className="text-4xl mb-2">🏆</div>
                        <h3 className="font-bold text-lg mb-2 text-blue-500">Primer Premio</h3>
                        <p className="text-gray-300 text-2xl font-bold">$10,000</p>
                        <p className="text-gray-500 text-sm">MXN</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-lg border border-blue-600/30 rounded-lg p-6 hover:border-blue-600/50 transition-all">
                        <div className="text-4xl mb-2">🎁</div>
                        <h3 className="font-bold text-lg mb-2 text-blue-500">Segundo Premio</h3>
                        <p className="text-gray-300 text-2xl font-bold">$5,000</p>
                        <p className="text-gray-500 text-sm">MXN</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-lg border border-blue-600/30 rounded-lg p-6 hover:border-blue-600/50 transition-all">
                        <div className="text-4xl mb-2">🎊</div>
                        <h3 className="font-bold text-lg mb-2 text-blue-500">Tercer Premio</h3>
                        <p className="text-gray-300 text-2xl font-bold">$2,500</p>
                        <p className="text-gray-500 text-sm">MXN</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
