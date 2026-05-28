"use client";
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  bookingsSchema,
  BookingFormData,
} from "@/lib/validations/bookingSchema";
import { toast } from "sonner";

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingsSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      console.log("Submitting:", data);

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log("SERVER ERROR:", result);
        throw new Error("Booking failed");
      }
      toast.success("Booking created successfully!");
      console.log("Success:", result);
    } catch (error) {
      console.error(error);
      toast.error("Error creating booking. Please try again.");
    }
  };

  // const onSubmit = async (data: BookingFormData) => {
  //   try {
  //     console.log("Start Submitting booking:", data);

  //     const response = await fetch("/api/bookings", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });

  //     const result = await response.json();
  //     console.log(result);

  //     if (!response.ok) {
  //       throw new Error(result.message || "Failed to create booking");
  //     }

  //     toast.success("Booking created successfully!");
  //   } catch (error) {
  //     toast.error("Error creating booking. Please try again.");
  //     console.error("Error submitting booking:", error);
  //   }
  // };

  // const onSubmit = async (data: BookingFormData) => {
  //   try {
  //     const response = await fetch("/api/bookings", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Booking failed");
  //     }

  //     const result = await response.json();
  //     toast.success("Booking created successfully!");

  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Error creating booking. Please try again.");
  //   }
  // };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-[#e8e4da] bg-white p-6"
    >
      {/*  NAME */}
      <div>
        <label className="mb-2 block text-sm font-medium">YourFull Name</label>

        <input
          type="text"
          placeholder="John Doe"
          {...register("name")}
          className="w-full rounded-xl border border-[#ddd] px-4 py-3 outline-none focus:border-primary-green"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <label className="mb-2 block text-sm font-medium">Email</label>

        <input
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          className="w-full rounded-xl border border-[#ddd] px-4 py-3 outline-none focus:border-primary-green"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <input {...register("phone")} />
      <input {...register("service")} />
      <input {...register("location")} />
      <input {...register("address")} />
      <input {...register("date")} />
      <input {...register("time")} />
      <textarea {...register("note")} />
      {/* BUTTON */}
      <button
        type="submit"
        className="rounded-xl bg-primary-green px-6 py-3 text-white transition hover:opacity-90"
      >
        Book Session
      </button>
    </form>
  );
}
