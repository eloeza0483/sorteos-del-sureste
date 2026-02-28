import { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function CountdownTimer() {
    // 1. Definimos la fecha objetivo (ejemplo: 30 días a partir de ahora)
    const [targetDate] = useState(new Date('2026-03-04T23:59:59').getTime());
    
    // 2. Estado para guardar el tiempo que falta
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // 3. Creamos un intervalo que se ejecuta cada 1 segundo (1000ms)
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            // 4. Cálculos matemáticos para convertir milisegundos a tiempo humano
            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            } else {
                clearInterval(timer); // Si llegamos a cero, detenemos el reloj
            }
        }, 1000);

        // 5. IMPORTANTE: Limpiar el intervalo cuando el componente se destruye
        // Esto evita que el navegador se vuelva lento (Memory Leaks)
        return () => clearInterval(timer);
    }, [targetDate]);

    // Función auxiliar para añadir un cero a la izquierda (ej: 09 en lugar de 9)
    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
        <div className="flex justify-center gap-4 md:gap-8 mb-12">
            <TimeUnit label="Días" value={formatNumber(timeLeft.days)} />
            <div className="text-3xl md:text-5xl font-bold text-blue-500 mt-2">:</div>
            <TimeUnit label="Horas" value={formatNumber(timeLeft.hours)} />
            <div className="text-3xl md:text-5xl font-bold text-blue-500 mt-2">:</div>
            <TimeUnit label="Mins" value={formatNumber(timeLeft.minutes)} />
            <div className="text-3xl md:text-5xl font-bold text-blue-500 mt-2">:</div>
            <TimeUnit label="Segs" value={formatNumber(timeLeft.seconds)} />
        </div>
    );
}

// Pequeño sub-componente interno para cada unidad de tiempo
function TimeUnit({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-black/10 backdrop-blur-md border border-blue-500/30 rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[90px]">
                <span className="text-3xl md:text-5xl font-bold text-white tabular-nums">
                    {value}
                </span>
            </div>
            <span className="text-blue-400 text-xs md:text-sm font-bold uppercase mt-2 tracking-widest">
                {label}
            </span>
        </div>
    );
}
