import type { PaymentMethod } from '../interfaces/PaymentMethod.ts'

/**
 * Métodos de pago disponibles (datos mock)
 */
export const mockPaymentMethods: PaymentMethod[] = [
  {
    id: 1,
    name: 'Transferencia Bancaria',
    description: 'Transferencia directa a cuenta bancaria',
    instructions: 'Realiza la transferencia y envía tu comprobante por WhatsApp',
    accountNumber: '1234567890',
    accountName: 'Rifa Ratita',
    bank: 'BBVA',
  },
  {
    id: 2,
    name: 'Depósito en OXXO',
    description: 'Paga en efectivo en cualquier OXXO',
    instructions: 'Menciona el número de referencia en caja y realiza tu pago',
    accountNumber: 'REF-9876543210',
  },
  {
    id: 3,
    name: 'PayPal',
    description: 'Pago seguro con PayPal',
    instructions: 'Envía tu pago a: rifa@example.com',
    accountName: 'rifa@example.com',
  },
]
