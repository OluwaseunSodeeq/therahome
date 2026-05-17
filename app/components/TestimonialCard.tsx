import { Testimonial } from "@/types/defaultType";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      className="
        h-full
        rounded-2xl
        border
        border-stone-200
        bg-white
        p-7
      "
    >
      {/* STARS */}
      <div
        className="
          mb-4
          flex
          gap-1
        "
      >
        {[...Array(testimonial.stars)].map((_, index) => (
          <span
            key={index}
            className="
              text-sm
              text-yellow-400
            "
          >
            ★
          </span>
        ))}
      </div>

      {/* TEXT */}
      <p
        className="
          mb-5
          italic
          leading-7
          text-neutral-700
        "
      >
        &quot;{testimonial.text}&quot;
      </p>

      {/* NAME */}
      <h4
        className="
          text-sm
          font-bold
          text-neutral-900
        "
      >
        {testimonial.name}
      </h4>
    </div>
  );
}
