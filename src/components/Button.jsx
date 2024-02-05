export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 font-semibold text-stone-900 bg-amber-500 rounded uppercase hover:bg-pink-400 hover:text-white transition-colors duration-500"
      {...props}
    >
      {children}
    </button>
  );
}
