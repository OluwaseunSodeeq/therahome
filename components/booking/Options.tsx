import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type CustomSelectProps = {
  label: string;
  options: string[];
  placeholder: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  // className?: string;
};

export default function Options({
  label,
  options,
  placeholder,
  registration,
  error,
}: CustomSelectProps) {
  return (
    <div>
      <label
        htmlFor="plan"
        className="mb-2 block text-sm font-medium text-neutral-700"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id="plan"
          {...registration}
          className="
        w-full
        appearance-none
        rounded-2xl
        border
        border-neutral-200
        bg-white
        px-4
        py-3.5
        pr-12
        text-sm
        text-neutral-800
        outline-none
        transition-all
        duration-300
        cursor-pointer
        hover:border-primary-green/50
        focus:border-primary-green
        focus:ring-4
        focus:ring-primary-green/10
      "
          defaultValue=""
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((plan) => (
            <option key={plan} value={plan}>
              {plan}
            </option>
          ))}
        </select>

        {/* Custom Arrow */}
        <div
          className="
        pointer-events-none
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        text-neutral-500
      "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
