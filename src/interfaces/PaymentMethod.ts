/**
 * Interface para representar un método de pago
 */
export interface PaymentMethod {
  id: number
  name: string              // Ej: "Transferencia Bancaria", "OXXO"
  description: string       // Descripción del método
  instructions: string      // Instrucciones de cómo pagar
  accountNumber?: string    // Número de cuenta (para transferencias)
  accountName?: string      // Nombre del titular
  bank?: string            // Banco (para transferencias)
  icon?: string            // Ruta al ícono
}
