import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ReservationContextType {
    userName: string;
    reservedTickets: string[];
    setReservation: (name: string, tickets: string[]) => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function ReservationProvider({children}: {
children: ReactNode;
}){
    const [userName, setUserName] = useState("");
    const [reservedTickets, setReservedTickets] = useState<string[]>([]);

    const setReservation = (name: string, tickets: string[]) => {
        setUserName(name);
        setReservedTickets(tickets);
    };

    return (
        <ReservationContext.Provider value={{ userName, reservedTickets, setReservation }}>
            {children}
        </ReservationContext.Provider>
    );
}

export function useReservation() {
    const context = useContext(ReservationContext);
    if (!context) {
        throw new Error("useReservation must be used within a ReservationContextProvider");
    }
    return context;
}