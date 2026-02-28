import { PaymentMethodCard } from "./PaymentMethodCard";
import { mockPaymentMethods } from "../../data/mockPaymentMethods";
import { MessageCircle } from 'lucide-react'; 
import { useReservation } from "../../context/ReservationContext";

export function PaymentMethod() {

const {userName, reservedTickets } = useReservation();    

const handleWhatsApp=()=>{
    const telefono = "+529993643208";
    const mensaje = `¡Hola! Acabo de realizar el pago de mis boletos. 
Mi nombre es: ${userName}
Boletos: ${reservedTickets}
Adjunto mi comprobante de pago.`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

    return (
        <section id="pagos" className="py-20 bg-black/60 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Métodos de <span className="text-green-500">Pago</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Para finalizar tu reserva, realiza el depósito o transferencia y envía tu comprobante por WhatsApp. 
                        Tus boletos quedarán apartados por 24 horas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {mockPaymentMethods.map((method) => (
                        <PaymentMethodCard key={method.id} method={method} />
                    ))}
                </div>
                
                {/* Botón de ayuda extra */}
              <div className="mt-16 text-center bg-green-500/10 p-8 rounded-3xl border border-green-500/20 max-w-2xl mx-auto">
    <MessageCircle className="text-green-500 mx-auto mb-4" size={40} />
    <h3 className="text-white text-xl font-bold mb-2">¿Ya realizaste tu pago?</h3>
    <p className="text-gray-400 mb-6 font-medium">
        Haz clic debajo para enviarnos tu comprobante. Nuestro equipo verificará tu pago y activará tus boletos en menos de 10 minutos.
    </p>
    <button 
        onClick={handleWhatsApp}
        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-2xl font-black transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-green-900/20"
    >
        <MessageCircle size={20} />
        ENVIAR COMPROBANTE POR WHATSAPP
    </button>
</div>
            </div>
        </section>
    );
}