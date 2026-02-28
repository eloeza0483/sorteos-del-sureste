import { Ticket, CalendarCheck, CreditCard, MessageCircle } from 'lucide-react';
import { DynamicStep } from './DynamicStep';

export function DynamicSection() {
    const steps = [
        {
            number: "01",
            title: "Selecciona",
            description: "Elige tus números de la suerte desde nuestro grid interactivo. ¡Puedes elegir los que quieras!",
            Icon: Ticket
        },
        {
            number: "02",
            title: "Reserva",
            description: "Llena tus datos básicos para apartar tus boletos. Tienes 24 horas para realizar tu pago.",
            Icon: CalendarCheck
        },
        {
            number: "03",
            title: "Paga",
            description: "Realiza tu transferencia o depósito en OXXO usando nuestras cuentas oficiales.",
            Icon: CreditCard
        },
        {
            number: "04",
            title: "Confirma",
            description: "Envía tu comprobante por WhatsApp y listo, tus boletos aparecerán como pagados.",
            Icon: MessageCircle
        }
    ];

    return (
        <section id="dinamica" className="py-24 bg-black px-4 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 italic">
                        ¿CÓMO <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">PARTICIPAR?</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Sigue estos 4 sencillos pasos para ganar la moto de tus sueños.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <DynamicStep key={step.number} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
}
