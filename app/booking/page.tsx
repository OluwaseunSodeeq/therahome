import BookingForm from "@/components/forms/BookingForm";

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-20">
      <BookingForm onSuccess={() => {}} />
    </main>
  );
}
