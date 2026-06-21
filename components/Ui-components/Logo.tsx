import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image
        src="/current-logo.svg"
        alt="TheraHome"
        width={80}
        height={80}
        priority
        className="w-16 md:w-20 shrink-0"
        style={{ height: "auto" }}
      />

      <div className="font-geo leading-tight">
        <p className="text-primary-green font-extrabold text-lg md:text-xl">
          TheraHome
        </p>

        <p className="text-[11px] md:text-xs text-primary-green/90 font-medium">
          The spa that comes to you!
        </p>
      </div>
    </Link>
  );
}
// import Image from "next/image";
// import Link from "next/link";

// export default function Logo() {
//   return (
//     <Link href="/" className="flex items-center gap-2 border-2">
//         <div>

//       <Image
//         src="/logo.png"
//         alt="TheraHome"
//         width={150}
//         height={30}
//         priority
//         sizes="(max-width: 768px) 120px, 150px"
//         className="w-30 md:w-36 h-auto object-contain border-2"
//         />
//         </div>
//       <div className="font-geo flex flex-col  -ml-9.5 -mt-2.5 transition-all duration-300">
//         <p className="text-primary-green font-bold text-lg">TheraHome</p>
//         <p className="  text-[12px] text-primary-green/90 -mt-1.5">
//           The spa that comes to you!
//         </p>
//       </div>
//     </Link>
//   );
// }
