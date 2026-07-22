interface CarouselHeaderProps {
  eyebrow?: string;
  title?: string;
}

export default function CarouselHeader({
  eyebrow,
  title,
}: CarouselHeaderProps) {
  if (!title && !eyebrow) return null;

  return (
    <div className="text-center lg:mb-14 font-geo">
      <div className="mb-3.5 flex items-center justify-center gap-2">
        <div className="h-px w-7 bg-[#c5b99a]" />

        <span className="text-[15px] text-primary-light">🌿</span>

        <div className="h-px w-7 bg-[#c5b99a]" />
      </div>

      {eyebrow && (
        <p className="text-xs font-bold tracking-[0.15em] uppercase text-text-black mt-5 lg:mt-0">
          {eyebrow}
        </p>
      )}

      {title && (
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-5 leading-relaxed">
          {title}
        </h2>
      )}
    </div>
  );
}
