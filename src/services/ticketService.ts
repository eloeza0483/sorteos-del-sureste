import type { Ticket } from '../interfaces/Ticket.ts'
import { mockTickets } from '../data/mockTickets'

/**
 * Servicio para manejar operaciones de boletos
 * 
 * Analogía Laravel: Es como un Service o Repository que abstrae la lógica de negocio
 * Por ahora usa datos mock, pero después consumirá la API Laravel
 */

// Cambia a false cuando tengas el backend listo
const USE_MOCK_DATA = true

/**
 * Obtiene todos los boletos disponibles
 */
export const getTickets = async (): Promise<Ticket[]> => {
  if (USE_MOCK_DATA) {
    // Simula delay de red (para que se vea realista)
    await new Promise(resolve => setTimeout(resolve, 500))
    return mockTickets
  }

  // Cuando tengas backend Laravel:
  const response = await fetch('http://localhost:8000/api/tickets')
  if (!response.ok) {
    throw new Error('Error al obtener boletos')
  }
  return response.json()
}

/**
 * Reserva un boleto
 */
export const reserveTicket = async (
  ticketId: number,
  userName: string
): Promise<Ticket> => {
  if (USE_MOCK_DATA) {
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Simula la reserva (en memoria)
    const ticket = mockTickets.find(t => t.id === ticketId)
    if (!ticket) {
      throw new Error('Boleto no encontrado')
    }
    if (ticket.reserved) {
      throw new Error('Boleto ya reservado')
    }
    
    ticket.reserved = true
    ticket.reservedBy = userName
    ticket.reservedAt = new Date().toISOString()
    
    return ticket
  }

  // Cuando tengas backend Laravel:
  const response = await fetch('http://localhost:8000/api/tickets/reserve', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ticketId, userName }),
  })

  if (!response.ok) {
    throw new Error('Error al reservar boleto')
  }

  return response.json()
}
