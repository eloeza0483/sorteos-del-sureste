/**
 * Interface para representar un boleto de la rifa
 * 
 * Analogía Laravel: Es como un Model de Eloquent, pero solo la estructura de datos
 */
export interface Ticket {
  id: number              // ID único del boleto
  number: string          // Número del boleto (ej: "001", "042")
  reserved: boolean       // ¿Está reservado?
  reservedBy?: string     // Nombre de quien lo reservó (opcional)
  reservedAt?: string     // Fecha de reserva (opcional)
  price: number           // Precio del boleto
}
