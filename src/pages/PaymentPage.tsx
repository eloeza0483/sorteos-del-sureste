import { PaymentMethod } from '../features/payment/PaymentMethod';
export function PaymentPage() {
  return (
    <div className="pt-20"> {/* Un poco de padding para que no lo tape el Navbar */}
      <PaymentMethod />
    </div>
  );
}