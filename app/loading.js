export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Logo / Initial */}
      <div className="relative mb-8">
        <div className="h-20 w-20 rounded-full border-4 border-slate-200"></div>
        <div className="absolute inset-0 h-20 w-20 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold text-slate-800 tracking-wide">
        Almost Ready...
      </h2>

      {/* Message */}
      <p className="mt-3 max-w-sm text-center text-slate-500 leading-relaxed px-6">
        This portfolio contains projects, animations and media.
        It may take a few extra seconds to prepare everything.
      </p>

      {/* Progress Bar */}
      <div className="mt-8 h-1 w-72 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-blue-600"></div>
      </div>

      <p className="mt-4 text-sm text-slate-400">
        Preparing content...
      </p>
    </div>
  );
}
