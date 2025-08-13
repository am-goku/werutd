function LoadingSpinner({ label = "Loading..." }: { label?: string }) {
  return (
    <div role="status" aria-live="polite" className="flex items-center gap-3 rounded-2xl border border-emerald-800/40 bg-black/40 p-4 text-emerald-300">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" aria-hidden />
      <span>{label}</span>
    </div>
  );
}

export default LoadingSpinner;