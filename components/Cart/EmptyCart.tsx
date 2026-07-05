import { useCart } from "@/hooks/useCart";

export default function EmptyCart() {
  const { closeCart } = useCart();
  return (
    <div className="flex h-full items-center justify-center flex-col gap-4 py-10 lg:py-20">
      <p className="text-center text-gray-500">
        Your cart is empty. 🛒 <br />
        Looks like you haven&apos;t added <br />
        any wellness products yet.
      </p>
      <button
        onClick={closeCart}
        className="mt-4 rounded-lg bg-primary-green px-4 py-2 text-white hover:bg-secondary-green"
      >
        Browse Products
      </button>
    </div>
  );
}
