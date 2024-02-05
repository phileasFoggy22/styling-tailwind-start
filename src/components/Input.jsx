export default function CustomInput({ label, invalid, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClasses = "w-full px-3 py-2 leading-tight  border rounded shadow ";

  if (invalid) {
    labelClasses += "text-yellow-400";
    inputClasses += "text-green-500 bg-red-100 border-red-500";
  } else {
    labelClasses += "text-yellow-300";
    inputClasses += "text-gray-700 bg-pink-300";
  }
  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
