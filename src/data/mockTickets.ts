import type { Ticket } from '../interfaces/Ticket.ts'

/**
 * Datos mock de boletos para desarrollo
 * 
 * Analogía Laravel: Es como usar Seeders para llenar la BD con datos de prueba
 * Más adelante esto vendrá de la API Laravel
 */
export const mockTickets: Ticket[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  number: String(index + 1).padStart(3, '0'), // "001", "002", etc.
  reserved: Math.random() > 0.7, // 30% de boletos reservados aleatoriamente
  reservedBy: Math.random() > 0.7 ? 'Usuario Demo' : undefined,
  reservedAt: Math.random() > 0.7 ? new Date().toISOString() : undefined,
  price: 50, // $50 por boleto
}))
