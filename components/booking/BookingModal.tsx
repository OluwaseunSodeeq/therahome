import { useFunctionalitiesContext } from "@/contexts/Functionalities";
import BookingForm from "./BookingForm";
import BookingPlan from "./BookingPlan";

export default function BookingPage() {
  const { showPlans } = useFunctionalitiesContext();
  return (
    <main className="relative mx-auto max-w-2xl px-4 py-20">
      <BookingForm onSuccess={() => {}} />
      {showPlans && <BookingPlan onSuccess={() => {}} />}
    </main>
  );
}
