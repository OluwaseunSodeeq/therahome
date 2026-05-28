export default function GlobalStyles() {
  return (
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        overflow-x: hidden;
        font-family:
          "Segoe UI",
          system-ui,
          -apple-system,
          sans-serif;
        background: #faf8f4;
      }

      input::placeholder {
        color: rgb(255 255 255 / 0.45);
      }

      /* ── scroll reveal ── */
      .reveal {
        will-change: opacity, transform;
      }

      /* ── nav ── */
      .nav-link {
        @apply whitespace-nowrap border-b-2 border-transparent pb-0.75 text-sm text-[#444] transition-all duration-200;
      }

      .nav-link:hover {
        @apply text-primary-green;
      }

      .nav-link.active {
        @apply border-primary-green text-primary-green font-semibold;
      }

      /* ── hamburger ── */
      .hbar {
        @apply bg-primary-green block h-0.5 w-5.5 rounded-sm transition-all duration-300;
      }

      /* ── product card ── */
      .p-card {
        @apply flex flex-col overflow-hidden rounded-[14px] border border-[#e8e4da] bg-white transition-all duration-300;
      }

      .p-card:hover {
        transform: translateY(-7px);
        box-shadow: 0 18px 44px rgba(45, 74, 45, 0.13);
      }

      .p-card-img {
        @apply block aspect-square w-full object-cover transition-transform duration-500;
      }

      .p-card:hover .p-card-img {
        transform: scale(1.05);
      }

      /* ── add button ── */
      .add-btn {
        @apply text-primary-green flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#d8d4cc] bg-white text-[18px] leading-none transition-all duration-200;
      }

      .add-btn:hover {
        @apply bg-primary-green border-primary-green text-white;
        transform: scale(1.1);
      }

      .add-btn.added {
        @apply bg-primary-green border-primary-green text-white;
      }

      /* ── mobile product row ── */
      .m-row {
        @apply flex items-center gap-4 rounded-[14px] border border-[#e8e4da] bg-white p-3.5 transition-all duration-300;
      }

      .m-row:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(45, 74, 45, 0.1);
      }

      .m-row-img {
        @apply h-21 w-21 shrink-0 rounded-[10px] object-cover;
      }

      /* ── trust bar ── */
      .trust-bar {
        @apply grid grid-cols-4 border-t border-[#e8e4da];
      }

      .trust-cell {
        @apply flex items-start gap-3.5 border-r border-[#e8e4da] px-6 py-7;
      }

      .trust-cell:last-child {
        border-right: none;
      }

      .trust-icon {
        @apply mt-0.5 shrink-0 text-[26px];
      }

      /* ── CTA banner ── */
      .cta-banner {
        @apply relative min-h-50 overflow-hidden;
      }

      .cta-banner-bg {
        @apply absolute inset-0 h-full w-full object-cover;
        object-position: center 30%;
      }

      .cta-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to right,
          rgba(20, 35, 12, 0) 0%,
          rgba(20, 35, 12, 0.75) 35%,
          rgba(20, 35, 12, 0.88) 100%
        );
      }

      .cta-inner {
        @apply relative z-2 mx-auto grid max-w-7xl grid-cols-3 items-center gap-10 px-13 py-13;
      }

      /* ── fixed mobile CTA ── */
      .mobile-cta-bar {
        @apply fixed bottom-0 left-0 right-0 z-50 hidden gap-3 border-t border-[#e8e4da] bg-white px-4 py-3;
      }

      .mob-cta-btn {
        @apply flex flex-1 items-center justify-center gap-2 rounded-[9px] border-none px-3.25 py-3.25 text-[13px] font-bold no-underline transition-all duration-200;
      }

      /* ── responsive ── */
      @media (max-width: 900px) {
        .nav-desktop {
          display: none !important;
        }

        .hamburger-btn {
          display: flex !important;
        }

        .products-desktop {
          display: none !important;
        }

        .products-mobile {
          display: flex !important;
        }

        .trust-bar {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        .trust-cell:nth-child(2) {
          border-right: none !important;
        }

        .trust-cell:nth-child(3),
        .trust-cell:nth-child(4) {
          border-top: 1px solid #e8e4da;
        }

        .trust-cell:nth-child(4) {
          border-right: none !important;
        }

        .cta-inner {
          grid-template-columns: 1fr !important;
          padding: 40px 24px !important;
        }

        .cta-overlay {
          background: rgba(20, 35, 12, 0.82) !important;
        }

        .mobile-cta-bar {
          display: flex !important;
        }

        .hero-content {
          padding: 32px 22px !important;
          max-width: 100% !important;
        }

        .hero-section {
          min-height: 320px !important;
        }

        .hero-img {
          object-position: 60% center !important;
        }
      }

      @media (max-width: 600px) {
        .trust-bar {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        .trust-icon-wrap {
          @apply flex flex-col items-center text-center;
        }
      }
    `}</style>
  );
}
