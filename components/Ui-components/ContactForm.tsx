"use client";

import { useState } from "react";
import { User, Phone, Mail, Send, Lock } from "lucide-react";
import HeadingLeave from "./HeadingLeave";
import ServiceReveal from "../../app/Animations/ServiceReveal";

// FORM TYPE
type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

// ERROR TYPE
type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  // update field
  const setField = (key: keyof FormData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  const validate = () => {
    const e: FormErrors = {};

    if (!form.name.trim()) {
      e.name = "Name is required";
    }

    if (!form.phone.trim() || form.phone.length < 8) {
      e.phone = "Valid phone required";
    }

    if (!form.email.trim() || !form.email.includes("@")) {
      e.email = "Valid email required";
    }

    if (!form.message.trim()) {
      e.message = "Please enter a message";
    }

    setErrors(e);

    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setSent(true);
    }, 1800);
  };

  const resetForm = () => {
    setSent(false);

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className="
      bg-hero-bg
      rounded-4
      py-6 md:py-8
      px-4 md:px-6
      shadow-sm2
      "
    >
      <ServiceReveal from="right">
        {/* Heading */}

        <div className="text-center mb-4 ">
          <h3
            className="
          text-2xl
          font-bold
          text-black
          "
          >
            Send Us a Message
          </h3>

          <div
            className="
          flex
          items-center
          justify-center
          gap-2
          mt-2
          "
          >
            <div className="w-6 h-px bg-parchment" />

            <HeadingLeave />

            <div className="w-6 h-px bg-parchment" />
          </div>
        </div>

        {sent ? (
          <div
            className="
          text-center
          py-6
          animate-in
          zoom-in
          "
          >
            <div
              className="
            w-16
            h-16
            rounded-full
            bg-green-100
            flex
            items-center
            justify-center
            text-3xl
            mx-auto
            mb-5
            "
            >
              ✅
            </div>

            <h4
              className="
            text-2xl
            font-bold
            serif
            "
            >
              Message Sent!
            </h4>

            <p
              className="
            text-sm
            text-primary-green
            mt-2
            leading-7
            "
            >
              Thank you <strong>{form.name.split(" ")[0]}</strong>! We&rsquo;ll
              get back to you within 10 minutes.
            </p>

            <button
              onClick={resetForm}
              className="
            mt-6
            w-full
            py-3
            rounded-r8
            text-white
            bg-secondary-green
            hover:bg-primary-green
            transition-all
            "
            >
              Send Another
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Name */}

            <div className="relative">
              <User
                size={16}
                className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-secondary-green
              "
              />

              <input
                type="text"
                value={form.name}
                placeholder="Full Name"
                onChange={(e) => setField("name", e.target.value)}
                className={`
              w-full
              pl-11
              p-3
              rounded-r8
              border
              outline-none
              transition-all
              focus:ring-4
              focus:ring-primary-green/10

              ${errors.name ? "border-red-500" : "border-secondary-green"}
              `}
              />

              {errors.name && (
                <p className="text-red-600 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}

            <div className="relative">
              <Phone
                size={16}
                className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-secondary-green
              "
              />

              <input
                type="tel"
                value={form.phone}
                placeholder="Phone Number"
                onChange={(e) => setField("phone", e.target.value)}
                className={`
              w-full
              pl-11
              p-3
              rounded-r8
              border

              ${errors.phone ? "border-red-500" : "border-secondary-green"}
              `}
              />

              {errors.phone && (
                <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Email */}

            <div className="relative">
              <Mail
                size={16}
                className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-secondary-green
              "
              />

              <input
                type="email"
                value={form.email}
                placeholder="Email Address"
                onChange={(e) => setField("email", e.target.value)}
                className={`
              w-full
              pl-11
              p-3
              rounded-r8
              border

              ${errors.email ? "border-red-500" : "border-secondary-green"}
              `}
              />

              {errors.email && (
                <p className="text-red-600 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}

            <div>
              <textarea
                value={form.message}
                placeholder="How can we help you?"
                onChange={(e) => setField("message", e.target.value)}
                className={`
              min-h-27.5
              resize-y
              p-4
              rounded-r8
              border
              w-full

              ${errors.message ? "border-red-500" : "border-border"}
              `}
              />

              {errors.message && (
                <p className="text-red-600 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="
            text-white
            bg-secondary-green
            hover:bg-primary-green
            py-4
            rounded-r8
            flex
            justify-center
            items-center
            gap-2
            transition-all
            disabled:opacity-70
            "
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            <div
              className="
            flex
            items-center
            justify-center
            gap-2
            text-center
            mt-2
            text-xs
            text-ghost
            "
            >
              <Lock size={13} />

              <span>
                Your information is safe with us.
                <br />
                We respect your privacy.
              </span>
            </div>
          </div>
        )}
      </ServiceReveal>
    </div>
  );
}
