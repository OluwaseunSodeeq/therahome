export function WhiteOverlay() {
  return (
    <div
      className="absolute inset-y-0 left-0 hidden lg:block w-[55%]"
      style={{
        background: `
      linear-gradient(
        90deg,
        rgba(255,255,255,0.90) 0%,
        rgba(255,255,255,0.75) 35%,
        rgba(255,255,255,0.45) 70%,
        rgba(255,255,255,0) 100%
      )
    `,
      }}
    />
  );
}

export function LightWhiteOverlay() {
  return (
    <div
      className="absolute inset-0 hiddden lg:block"
      style={{
        background: `
      linear-gradient(
        90deg,
        rgba(255,255,255,0.75) 0%,
        rgba(255,255,255,0.55) 30%,
        rgba(255,255,255,0.3) 55%,
        rgba(255,255,255,0.1) 75%,
        rgba(255,255,255,0) 100%
      )
    `,
      }}
    />
  );
}

export function BlackOverlay() {
  return (
    <div
      className="absolute inset-0 hidden   lg:block"
      style={{
        background: `
      linear-gradient(
        90deg,
        rgba(12,12,12,0.88) 0%,
        rgba(12,12,12,0.78) 30%,
        rgba(12,12,12,0.45) 55%,
        rgba(12,12,12,0.15) 75%,
        rgba(12,12,12,0) 100%
      )
    `,
      }}
    />
  );
}
export function Overlay() {
  return (
    <div
      className="absolute inset-0  lg:hidden"
      style={{
        background: `
      linear-gradient(
        90deg,
        rgba(12,12,12,0.88) 0%,
        rgba(12,12,12,0.78) 30%,
        rgba(12,12,12,0.45) 55%,
        rgba(12,12,12,0.15) 75%,
        rgba(12,12,12,0) 100%
      )
    `,
      }}
    />
  );
}
