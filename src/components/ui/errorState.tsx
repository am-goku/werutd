function ErrorState({ message, onRetry }: { message?: string; onRetry: () => void }) {
  return (
    <div role="alert" className="space-y-3 rounded-2xl border border-red-900/40 bg-red-950/30 p-4 text-red-200">
      <div className="font-semibold">Something went wrong</div>
      <div className="text-sm opacity-90">{message || "Please try again."}</div>
      <button
        onClick={onRetry}
        className="rounded-xl bg-red-700 px-3 py-2 text-sm text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Retry
      </button>
    </div>
  );
}

export default ErrorState;