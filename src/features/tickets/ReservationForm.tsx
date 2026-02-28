import { useState } from "react";
import type { Ticket } from "../../interfaces/Ticket.ts";
import { useNavigate } from "react-router-dom";
import { useReservation } from "../../context/ReservationContext.tsx";

interface ReservationFormProps {
    show: boolean;
    onClose: () => void;
    selectedTickets: Ticket[];
    total: number;
}

export function ReservationForm({ show, onClose, selectedTickets, total }: ReservationFormProps) {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [telefono, setTelefono] = useState("");
    const { setReservation } = useReservation();

    // Si 'show' es falso, no renderizamos nada (Early Return)
    if (!show) return null;

    // Validación simple: ¿están los campos llenos?
    // Analogía Laravel: Como un $request->validate() pero en tiempo real
    const isFormValid = nombre.trim() !== "" && apellidos.trim() !== "" && telefono.trim() !== "";

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Overlay: Fondo oscuro con desenfoque */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
                onClick={onClose} // Cerrar al hacer clic fuera
            />

            {/* Contenido del Modal */}
            <div className="relative bg-gray-900 border border-white/10 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
                {/* Cabecera */}
                <div className="bg-blue-600 p-6 text-white text-center">
                    <h2 className="text-xl font-bold">Finalizar Reserva</h2>
                    <p className="text-blue-100 text-sm mt-1">
                        Estás reservando {selectedTickets.length} boletos
                    </p>
                </div>

                <div className="p-6">
                    {/* Lista de boletos seleccionados */}
                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {selectedTickets.map(t => (
                            <span key={t.id} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold border border-blue-500/30">
                                #{t.number}
                            </span>
                        ))}
                    </div>

                    {/* Formulario */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-400 text-xs font-bold uppercase mb-2 tracking-wider">Nombre(s)</label>
                            <input 
                                type="text" 
                                placeholder="Ej. Juan"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 text-xs font-bold uppercase mb-2 tracking-wider">Apellido(s)</label>
                            <input 
                                type="text" 
                                placeholder="Ej. Pérez"
                                value={apellidos}
                                onChange={(e) => setApellidos(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 text-xs font-bold uppercase mb-2 tracking-wider">WhatsApp (10 dígitos)</label>
                            <input 
                                type="tel" 
                                placeholder="9991234567"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                            />
                        </div>
                    </div>

                    {/* Total y Botones */}
                    <div className="mt-8 pt-6 border-t border-white/5">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-400 font-medium">Total a pagar:</span>
                            <span className="text-2xl font-bold text-white">${total} MXN</span>
                        </div>

                        <div className="flex gap-3">
                            <button 
                                onClick={onClose}
                                className="flex-1 px-4 py-3 rounded-xl font-bold text-gray-400 hover:bg-white/5 transition-all text-sm"
                            >
                                Cancelar
                            </button>
                            <button 
                                disabled={!isFormValid}
                                onClick={() => {
                                    const ticketsNumbers = selectedTickets.map(t => t.number);
                                    setReservation(`${nombre} ${apellidos}`, ticketsNumbers);
                                    onClose();
                                    navigate('/pagos');
                                }}
                                className="flex-1 bg-green-600 disabled:bg-gray-700 disabled:text-gray-500 text-white px-4 py-3 rounded-xl font-bold hover:bg-green-500 transition-all transform active:scale-95 disabled:scale-100 shadow-lg disabled:cursor-not-allowed text-sm"
                            >
                                Confirmar Reserva
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}