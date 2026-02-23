import { useEffect, useState } from 'react';
import type { Ticket } from '../../interfaces/Ticket';
import { getTickets } from '../../services/ticketService';
import { TicketCard } from './TicketCard';

/**
 * TicketGrid - El contenedor principal de los boletos
 * 
 * Aquí manejamos la lógica de "Estado Global" de la selección.
 * 
 * Analogía Laravel: Imagina que esta es tu vista principal que recibe
 * la colección de tickets del controlador y tiene la lógica JS para el carrito.
 */
export function TicketGrid() {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [selectedTickets, setSelectedTickets] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState(true);

    // useEffect: Hook que se ejecuta cuando el componente aparece (como el constructor o init)
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const data = await getTickets();
                setTickets(data);
            } catch (error) {
                console.error("Error cargando boletos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTickets();
    }, []);

    // Función para seleccionar/deseleccionar un boleto
    const handleToggleSelect = (ticket: Ticket) => {
        setSelectedTickets(prev => {
            const isAlreadySelected = prev.some(t => t.id === ticket.id);
            
            if (isAlreadySelected) {
                // Si ya estaba, lo quitamos (filtramos)
                return prev.filter(t => t.id !== ticket.id);
            } else {
                // Si no estaba, lo agregamos
                return [...prev, ticket];
            }
        });
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-blue-400 font-medium animat-pulse">Cargando boletos...</p>
            </div>
        );
    }

    return (
        <section className="py-16 px-4 bg-black/40" id="tickets">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Elige tus <span className="text-blue-500">Boletos</span>
                    </h2>
                    <p className="text-gray-400">Haz clic en los números que desees reservar.</p>
                </div>

                {/* Grid Responsivo: 4 columnas en móvil, 10 en desktop */}
                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 gap-2 md:gap-3 bg-white/5 p-4 md:p-8 rounded-2xl border border-blue-500/10 backdrop-blur-sm">
                    {tickets.map((ticket) => (
                        <TicketCard
                            key={ticket.id}
                            ticket={ticket}
                            isSelected={selectedTickets.some(t => t.id === ticket.id)}
                            onSelect={handleToggleSelect}
                        />
                    ))}
                </div>

                {/* Barra Flotante de Selección (Carrito) */}
                {selectedTickets.length > 0 && (
                    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
                        <div className="bg-blue-600/90 backdrop-blur-lg border border-white/20 p-4 md:p-6 rounded-2xl shadow-2xl flex items-center justify-between animate-slideUp">
                            <div className="text-white">
                                <p className="text-sm font-medium opacity-80">Seleccionados</p>
                                <p className="text-xl font-bold">
                                    {selectedTickets.length} boletos
                                    <span className="hidden sm:inline ml-2 text-blue-200">
                                        (${selectedTickets.reduce((acc, t) => acc + t.price, 0)} MXN)
                                    </span>
                                </p>
                            </div>
                            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                                Reservar Ahora
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
