export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="px-4 py-2 font-bold bg-blue-300 text-blue-800 rounded-lg text-sm"
    />
  );
}

export function ButtonSmall(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className="px-4 py-4 font-bold bg-red-400 text-red-6 rounded-lg text-md"
    />
  );
}
