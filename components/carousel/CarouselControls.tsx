import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function CarouselControls({ onPrev, onNext }: Props) {
  return (
    <div className="flex justify-center gap-4 mt-10">
      <button
        onClick={onPrev}
        className="w-12 h-12 rounded-full border  bg-white border-hero-img text-primary-green flex items-center justify-center transition hover:bg-primary-green hover:text-white cursor-pointer"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={onNext}
        className="w-12 h-12 rounded-full border  bg-white border-hero-img text-primary-green flex items-center justify-center transition hover:bg-primary-green hover:text-white cursor-pointer"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
