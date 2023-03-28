export function Logo() {
  return (
    <h1 className="text-2xl font-extrabold text-black_gray-900 dark:text-white_gray-500 flex">
      Post-it
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400"></span>
      </span>
    </h1>
  );
}
