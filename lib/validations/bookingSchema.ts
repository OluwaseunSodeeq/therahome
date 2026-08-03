import { z } from "zod";

export const bookingsSchema = z
  .object({
    name: z.string().min(2, "Full name is required"),

    email: z.string().email("Please enter a valid email address"),

    phone: z.string().min(10, "Phone number is too short").optional(),

    service: z.string().optional(),

    location: z.string().optional(),

    address: z.string().optional(),

    date: z.string().min(1, "Please select a date"),

    time: z.string().min(1, "Please select a time"),

    note: z.string().max(500).optional(),
  })
  .superRefine((data, ctx) => {
    const selectedDateTime = new Date(`${data.date} ${data.time}`);

    const now = new Date();

    if (selectedDateTime <= now) {
      ctx.addIssue({
        code: "custom",
        message: "Please select a future date and time.",
        path: ["time"],
      });
    }
  });
export type BookingFormData = z.infer<typeof bookingsSchema>;

// export const bookingsSchema = z
//   .object({
//     name: z.string().min(2, "Full name is required"),

//     email: z.string().email("Please enter a valid email address"),

//     phone: z.string().min(10, "Phone number is too short").optional(),

//     service: z.string().min(1, "Please select a service").optional(),

//     location: z.string().min(1, "Please select a location").optional(),

//     address: z.string().min(5, "Address is too short").optional(),

//     date: z.string().min(1, "Please select a date"),

//     time: z.string().min(1, "Please select a time"),

//     note: z.string().max(500, "Note is too long").optional(),
//   })
//   .refine(
//     (data) => {
//       const selectedDateTime = new Date(`${data.date} ${data.time}`);

//       return selectedDateTime > new Date();
//     },
//     {
//       message: "Please select a future date and time.",
//       path: ["time"],
//     },
//   );

// export type BookingFormData = z.infer<typeof bookingsSchema>;

// import { z } from "zod";

// export const bookingsSchema = z
//   .object({
//     name: z.string().min(2, "Full name is required"),

//     email: z.string().email("Please enter a valid email address"),

//     phone: z.string().min(10, "Phone number is too short").optional(),

//     service: z.string().min(1, "Please select a service").optional(),

//     location: z.string().min(1, "Please select a location").optional(),

//     address: z.string().min(5, "Address is too short").optional(),

//     date: z.string().min(1, "Please select a date"),

//     time: z.string().min(1, "Please select a time"),

//     note: z.string().max(500, "Note is too long").optional(),
//   })
//   .superRefine((data, ctx) => {
//     const selectedDateTime = new Date(`${data.date}T${data.time}`);
//     const now = new Date();

//     // Invalid date/time
//     if (isNaN(selectedDateTime.getTime())) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         path: ["date"],
//         message: "Invalid booking date or time.",
//       });
//       return;
//     }

//     // Prevent booking in the past
//     if (selectedDateTime < now) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         path: ["time"],
//         message: "Please select a future date and time.",
//       });
//     }
//   });

// export type BookingFormData = z.infer<typeof bookingsSchema>;
