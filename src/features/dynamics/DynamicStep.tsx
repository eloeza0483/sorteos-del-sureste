import type { LucideIcon } from 'lucide-react';

interface Props {
    number: string;
    title: string;
    description: string;
    Icon: LucideIcon;
}

export function DynamicStep({ number, title, description, Icon }: Props) {
    return (
        <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group overflow-hidden">
            {/* Número gigante de fondo (Efecto muy moderno) */}
            <span className="absolute -top-4 -right-4 text-8xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors">
                {number}
            </span>
            
            <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6 border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <Icon className="text-blue-500" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                    {title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
