import BookingForm from "./BookingForm";

export default function BookingPage() {
  return (
    <main className="relative mx-auto max-w-2xl px-4 py-20">
      <button
        onClick={toggleForm}
        className="
                  absolute
                  left-5 top-5
                  rounded-full
                  p-2
                  transition
                  hover:bg-gray-100
                "
      >
        <X size={22} />
      </button>
      <BookingForm onSuccess={() => {}} />
    </main>
  );
}
