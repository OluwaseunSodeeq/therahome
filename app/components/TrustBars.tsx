import DirectionReveal from "../Animations/DirectionReveal";
import { trustItems } from "../data";

export default function TrustBars() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-6">
      <div className="w-full rounded-2xl border border-[#e7e2d9] bg-[#f8f5ef] overflow-hidden">
        <DirectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#e5ded2]">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 px-5 py-5 md:px-6"
                >
                  <div className="mt-1">
                    <Icon
                      size={24}
                      className="text-[#5c6b4f]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <h3 className="text-[15px] md:text-base font-semibold text-[#2e3528]">
                      {item.title}
                    </h3>

                    <p className="text-[13px] md:text-sm leading-relaxed text-[#70756b] mt-1 max-w-55">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </DirectionReveal>
      </div>
    </section>
  );
}

// export function TrustBars() {
//   return (
//     <section className="bg-hero-bg px-7">
//       <div className="mx-auto mt-10 max-w-7xl">
//         <DirectionReveal>
//           <div
//             className="
//               grid
//               grid-cols-1
//               md:grid-cols-2
//             xl:grid-cols-4
//               overflow-hidden
//               rounded-[14px]
//               border
//               border-[#e8e4da]
//               bg-white

//               max-[900px]:rounded-none
//               max-[900px]:border-x-0
//             "
//           >
//             {trustItems.map((item) => (
//               <div
//                 key={item.title}
//                 className="
//                   trust-cell

//                   max-[900px]:px-4
//                   max-[900px]:py-5

//                   max-[520px]:flex-col
//                   max-[520px]:items-center
//                   max-[520px]:gap-2
//                   max-[520px]:px-3
//                   max-[520px]:py-4.5
//                   max-[520px]:text-center
//                 "
//               >
//                 <span className="trust-icon-wrap">{item.icon}</span>

//                 <div>
//                   <div
//                     className="
//                       mb-1.25
//                       text-[13px]
//                       font-bold
//                       text-[#1a1a1a]
//                     "
//                   >
//                     {item.title}
//                   </div>

//                   <div
//                     className="
//                       text-xs
//                       leading-[1.6]
//                       text-[#999]
//                     "
//                   >
//                     {item.desc}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </DirectionReveal>
//       </div>
//     </section>
//   );
// }
