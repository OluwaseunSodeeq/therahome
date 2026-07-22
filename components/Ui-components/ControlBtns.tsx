
type ControlProps={
    count:
    prev:()=>void()
    
}

export default function ContoleBtns({ prev, count, next }) {
  return (
    <div
      className="
              mt-6
              flex
              justify-center
              gap-4
            "
    >
      <button
        onClick={prev}
        className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-primary-green
                bg-white
                transition-all
                duration-300
                hover:bg-primary-border-primary-green
                hover:text-white
              "
      >
        ‹
      </button>

      <button
        onClick={next}
        className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-primary-green
                bg-white
                transition-all
                duration-300
                hover:bg-primary-green
                hover:text-white
              "
      >
        ›
      </button>
    </div>
  );
}
