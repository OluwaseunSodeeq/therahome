"use client";

import { useState } from "react";
// import { useForm, useWatch } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  bookingsSchema,
  BookingFormData,
} from "@/lib/validations/bookingSchema";
import { useFunctionalitiesContext } from "@/contexts/Functionalities";

export default function BookingForm({ onSuccess }: { onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toggleBookingForm } = useFunctionalitiesContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingsSchema),
  });

  // useWatch is preferred for subscribing to form values without causing memoization issues
  // const "Spa" = useWatch({
  //   control,
  //   name: "location",
  // });

  const services = [
    "Swedish Massage",
    "Deep Tissue Massage",
    "Hot Stone Massage",
    "Aromatherapy Massage",
    "Sports Massage",
    "Reflexology",
    "Couples Massage",
    "Prenatal Massage",
  ];

  const locations = [
    "Ikeja",
    "Magodo",
    "Yaba",
    "Surulere",
    "Gbagada",
    "Lekki",
    "Victoria Island",
    "Ikoyi",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Booking failed");
      }

      toast.success(
        "🎉 Booking request received! We'll contact you shortly to confirm your appointment.",
      );

      reset({
        name: "",
        email: "",
        phone: "",
        service: "",
        location: "",
        address: "",
        date: "",
        time: "",
        note: "",
      });

      setTimeout(() => {
        onSuccess();
      }, 1800);
      setTimeout(() => {
        toggleBookingForm();
      }, 2000);
    } catch (error) {
      console.error(error);

      toast.error(
        "We couldn't send your booking request. Please check your internet connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // const onSubmit = async (data: BookingFormData) => {
  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch("/api/bookings", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     const result = await response.json();

  //     if (!response.ok) {
  //       throw new Error(result.message || "Booking failed");
  //     }

  //     toast.success("Booking request sent successfully!");

  //     reset();

  //     setTimeout(() => {
  //       onSuccess();
  //     }, 1500);
  //   } catch (error) {
  //     console.error(error);

  //     toast.error(
  //       "Unable to send your booking request. Please try again."
  //     );
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const inputClass =
    "w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-primary-green focus:ring-4 focus:ring-primary-green/10";

  return (
    <div
      onClick={toggleBookingForm}
      className="absolute top-0 left-0 inset-0 bg-black/40 backdrop-blur-sm z-40 flex items-start justify-center px-4 py-4"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        onClick={(e) => e.stopPropagation()}
        className=" w-full md:max-w-3xl lg:max-w-4xl rounded-3xl border border-neutral-200 bg-white p-6 md:p-12 mx-auto relative top-0 shadow-2xl"
      >
        {/* PERSONAL DETAILS */}

        <div className="space-y-4 py-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">
              Personal Information
            </h3>

            <p className="mt-1 text-sm text-neutral-500">
              Tell us how we can reach you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* NAME */}

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                {...register("name")}
                className={inputClass}
              />

              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className={inputClass}
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PHONE */}

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+234 800 000 0000"
                {...register("phone")}
                className={inputClass}
              />

              {errors.phone && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* BOOKING DETAILS */}

        <div className="space-y-5 border-t border-neutral-200 pt-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">
              Booking Details
            </h3>

            <p className="mt-1 text-sm text-neutral-500">
              Tell us about your preferred massage session.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* SERVICE AND LOCATION */}

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Massage Service
              </label>

              <select
                {...register("service")}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Select a service</option>

                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              {errors.service && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.service.message}
                </p>
              )}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Your Location
              </label>

              <select
                {...register("location")}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Select a location</option>

                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>

              {errors.location && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.location.message}
                </p>
              )}
            </div>
            {/* LOCATION */}

            {/* <div>
              <label className="mb-3 block text-sm font-medium text-neutral-700">
                Service Location
              </label>

              <div className="grid grid-cols-2 rounded-2xl bg-neutral-100 p-1">
                <button
                  type="button"
                  onClick={() => setValue("location", "Home")}
                  className={`rounded-xl py-3 text-sm font-semibold transition-all duration-300

                ${
                  "Home" === "Home"
                    ? "bg-primary-green text-white shadow-lg"
                    : "text-neutral-600 hover:bg-white"
                }`}
                >
                  🏡 Home Service
                </button>

                <button
                  type="button"
                  onClick={() => setValue("location", "Spa")}
                  className={`rounded-xl py-3 text-sm font-semibold transition-all duration-300

                ${
                  "Spa" === "Spa"
                    ? "bg-primary-green text-white shadow-lg"
                    : "text-neutral-600 hover:bg-white"
                }`}
                >
                  🌿 Spa Visit
                </button>
              </div>

              <input type="hidden" {...register("location")} />

              {errors.location && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.location.message}
                </p>
              )}
            </div> */}

            {/* ADDRESS */}

            {"Home" === "Home" && (
              <div className="md:col-span-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Home Address
                </label>

                <textarea
                  rows={3}
                  placeholder="Enter your complete address..."
                  {...register("address")}
                  className={`${inputClass} resize-none`}
                />

                <p className="mt-2 text-xs text-neutral-500">
                  Please provide a clear address so our therapist can locate you
                  easily.
                </p>

                {errors.address && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.address.message}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        {/* APPOINTMENT */}

        <div className="space-y-5 border-t border-neutral-200 pt-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">
              Appointment Schedule
            </h3>

            <p className="mt-1 text-sm text-neutral-500">
              Choose your preferred date and time for your massage session.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* DATE */}

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Preferred Date
              </label>

              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                {...register("date")}
                className={inputClass}
              />

              {errors.date && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.date.message}
                </p>
              )}
            </div>

            {/* TIME */}

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Preferred Time
              </label>

              <select
                {...register("time")}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Select a preferred time</option>

                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>

              {errors.time && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.time.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* NOTES */}

        <div className="space-y-5 border-t border-neutral-200 pt-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">
              Additional Information
            </h3>

            <p className="mt-1 text-sm text-neutral-500">
              Let us know if you have any special requests, preferences, or
              health information that would help us prepare for your session.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Notes (Optional)
            </label>

            <textarea
              rows={5}
              placeholder="Example: I prefer light pressure, I have lower back pain, please bring massage oil suitable for sensitive skin..."
              {...register("note")}
              className={`${inputClass} resize-none`}
            />

            {errors.note && (
              <p className="mt-2 text-sm text-red-500">{errors.note.message}</p>
            )}

            <p className="mt-3 text-xs leading-5 text-neutral-500">
              Any information you provide helps our therapists prepare for your
              appointment and deliver a better experience.
            </p>
          </div>
        </div>

        {/* SUMMARY */}

        <div className="rounded-3xl border border-primary-green/15 bg-linear-to-r from-primary-green/5 via-white to-primary-green/5 p-6">
          <h4 className="text-base font-semibold text-neutral-900">
            Before you submit
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            <li className="flex gap-3">
              <span>✔</span>
              <span>
                We`&apos;`ll review your request and confirm availability.
              </span>
            </li>

            <li className="flex gap-3">
              <span>✔</span>
              <span>
                A member of our team will contact you by phone or email.
              </span>
            </li>

            <li className="flex gap-3">
              <span>✔</span>
              <span>
                Your booking isn`&apos;`t confirmed until you receive
                confirmation from our team.
              </span>
            </li>
          </ul>
        </div>
        {/* ACTION BAR */}

        <div className="sticky bottom-0 -mx-6 -mb-6 mt-10 border-t border-neutral-200 bg-white/95 px-6 py-5 backdrop-blur-xl">
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-center text-xs leading-5 text-neutral-500 sm:text-left">
              By booking a session, you agree that our team may contact you to
              confirm your appointment.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="
              inline-flex
              h-12
              min-w-55
              items-center
              justify-center
              rounded-2xl
              bg-primary-green
              px-8
              font-semibold
              text-white
              shadow-lg
              shadow-primary-green/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-primary-green/30
              active:translate-y-0
              disabled:cursor-not-allowed
              disabled:opacity-70
              disabled:hover:translate-y-0
            "
            >
              {isSubmitting ? (
                <span className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      opacity=".25"
                    />

                    <path
                      d="M22 12a10 10 0 0 0-10-10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  Booking your session...
                </span>
              ) : (
                "Book Appointment"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

{
  /* // "use client";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { 
//   bookingsSchema,
//   BookingFormData,
// } from "@/lib/validations/bookingSchema";
// import { toast } from "sonner";

// export default function BookingForm({ onSuccess }: { onSuccess: () => void }) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<BookingFormData>({
//     resolver: zodResolver(bookingsSchema),
//   });

//   const onSubmit = async (data: BookingFormData) => {
//     try {
//       console.log("Submitting:", data);

//       const response = await fetch("/api/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         console.log("SERVER ERROR:", result);
//         throw new Error("Booking failed");
//       }
//       toast.success("Booking created successfully!");
//       console.log("Success:", result);
//       onSuccess();
//     } catch (error) {
//       console.error(error);
//       toast.error("Error creating booking. Please try again.");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="space-y-5 rounded-2xl border border-[#e8e4da] bg-white p-6"
//     >
//       
//       <div>
//         <label className="mb-2 block text-sm font-medium">YourFull Name</label>

//         <input
//           type="text"
//           placeholder="John Doe"
//           {...register("name")}
//           className="w-full rounded-xl border border-[#ddd] px-4 py-3 outline-none focus:border-primary-green"
//         />

//         {errors.name && (
//           <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
//         )}
//       </div>

//  
//       <div>
//         <label className="mb-2 block text-sm font-medium">Email</label>

//         <input
//           type="email"
//           placeholder="john@example.com"
//           {...register("email")}
//           className="w-full rounded-xl border border-[#ddd] px-4 py-3 outline-none focus:border-primary-green"
//         />

//         {errors.email && (
//           <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
//         )}
//       </div>
//       <input {...register("phone")} />
//       <input {...register("service")} />
//       <input {...register("location")} />
//       <input {...register("address")} />
//       <input {...register("date")} />
//       <input {...register("time")} />
//       <textarea {...register("note")} />
//       <button
//         type="submit"
//         className="rounded-xl bg-primary-green px-6 py-3 text-white transition hover:opacity-90"
//       >
//         Book Session
//       </button>
//     </form>
//   );
// }
//       {/* BUTTON */
}
