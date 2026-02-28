import { DynamicSection } from '../features/dynamics/DynamicSection';
import { HeroSection } from '../features/hero/HeroSection';
import { TicketGrid } from '../features/tickets/TicketGrid';
export function HomePage() {
  return (
    <main>
      <HeroSection />
      <DynamicSection />
      <TicketGrid />
    </main>
  );
}