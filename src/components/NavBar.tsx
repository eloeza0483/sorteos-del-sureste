import { useState } from 'react'

/**
 * Navbar responsive con menú hamburguesa para móvil
 * 
 * useState: Hook de React para manejar el estado del menú móvil
 * - isMenuOpen: Estado booleano (true = abierto, false = cerrado)
 * - setIsMenuOpen: Función para cambiar el estado
 * 
 * Analogía Laravel: Es como tener una variable $isMenuOpen en Blade,
 * pero en React el estado se actualiza automáticamente en la UI
 */
export function NavBar() {
    // Estado para controlar si el menú móvil está abierto
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-blue-500/30 p-4">
            <div className="hidden md:grid md:grid-cols-3 md:items-center max-w-7xl mx-auto">
                {/* Logo - Izquierda */}
                <div className="flex justify-start">
                    <h1 className="text-xl font-bold text-white tracking-tight">
                        Sorteos <span className="text-blue-500">del Sureste</span>
                    </h1>
                </div>

                {/* Menú - Centro (perfectamente centrado) */}
                <div className="flex justify-center">
                    <ul className="flex gap-8">
                        <li className="text-gray-300 cursor-pointer hover:text-blue-400 transition-colors font-medium">
                            Cómo funciona
                        </li>
                        <li className="text-gray-300 cursor-pointer hover:text-blue-400 transition-colors font-medium">
                            Precios
                        </li>
                        <li className="text-gray-300 cursor-pointer hover:text-blue-400 transition-colors font-medium">
                            Contacto
                        </li>
                    </ul>
                </div>

                {/* Botón Login - Derecha */}
                <div className="flex justify-end">
                    <button className="px-6 py-2 bg-blue-600/90 text-white rounded-lg hover:bg-blue-500 transition-all font-semibold backdrop-blur-sm border border-blue-400/30">
                        Login
                    </button>
                </div>
            </div>

            {/* Versión Móvil */}
            <div className="flex md:hidden items-center justify-between">
                {/* Logo móvil */}
                <div>
                    <h1 className="text-xl font-bold text-white">Sorteos del Sureste</h1>
                </div>

                {/* Botón Hamburguesa - Solo visible en móvil */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white focus:outline-none bg-transparent"
                    aria-label="Toggle menu"
                >
                    {/* Icono hamburguesa (3 líneas) */}
                    <svg
                        className="w-6 h-6 border-0 bg-transparent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            // Icono X (cerrar)
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            // Icono hamburguesa (3 líneas)
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menú Móvil - Solo visible cuando isMenuOpen es true */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-4 animate-slideDown">
                    {/* Links del menú */}
                    <ul className="space-y-2">
                        <li className="text-white cursor-pointer hover:text-gray-200 py-2 border-b border-blue-400">
                            ¿Cómo funciona?
                        </li>
                        <li className="text-white cursor-pointer hover:text-gray-200 py-2 border-b border-blue-400">
                            Precios
                        </li>
                        <li className="text-white cursor-pointer hover:text-gray-200 py-2 border-b border-blue-400">
                            Contacto
                        </li>
                    </ul>

                    {/* Botones en móvil */}
                    <div className="flex flex-col gap-2 pt-4">
                        <button className="w-full px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-gray-100">
                            Login
                        </button>
                        <button className="w-full px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-500">
                            Registro
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}