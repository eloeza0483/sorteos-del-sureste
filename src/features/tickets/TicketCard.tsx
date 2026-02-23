import type { Ticket } from '../../interfaces/Ticket';

/**
 * TicketCard - Representación visual de un boleto individual
 * 
 * Props:
 * @param ticket Objeto con la información del boleto
 * @param isSelected Estado de selección actual (en el carrito)
 * @param onSelect Función para alternar la selección
 * 
 * Analogía Laravel: Un componente Blade que recibe un modelo $ticket
 */
interface Props {
    ticket: Ticket;
    isSelected: boolean;
    onSelect: (ticket: Ticket) => void;
}

export function TicketCard({ ticket, isSelected, onSelect }: Props) {
    // Definimos el estado visual basado en la lógica de negocio
    const isSold = ticket.reserved;
    
    // Clases dinámicas de Tailwind según el estado
    // Esto es mucho más limpio que usar if/else estorbando el HTML
    const getStatusStyles = () => {
        if (isSold) {
            return 'bg-gray-800/40 border-gray-700 text-gray-600 cursor-not-allowed opacity-50 grayscale';
        }
        if (isSelected) {
            return 'bg-blue-600 border-blue-400 text-white scale-105 shadow-[0_0_15px_rgba(37,99,235,0.6)] z-10';
        }   
        return 'bg-white/5 border-blue-500/30 text-blue-200 hover:border-blue-500 hover:bg-blue-500/10 hover:scale-105';
    };

    return (
        <button
            disabled={isSold}
            onClick={() => onSelect(ticket)}
            className={`
                relative h-12 w-full sm:h-14 flex items-center justify-center 
                rounded-lg border font-bold transition-all duration-200
                text-sm md:text-base cursor-pointer overflow-hidden
                ${getStatusStyles()}
            `}
        >
            {/* Si está vendido, ponemos una pequeña X o icono de candado */}
            {isSold && (
                <span className="absolute inset-0 flex items-center justify-center text-[10px] opacity-20 rotate-12">
                    RESERVADO
                </span>
            )}
            
            {/* El número del boleto */}
            <span className="relative z-10">{ticket.number}</span>
            
            {/* Efecto de brillo sutil si está seleccionado */}
            {isSelected && (
                <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent"></div>
            )}
        </button>
    );
}
