export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-600 dark:text-slate-400 animate-pulse">
          Loading amazing projects...
        </p>
      </div>
    </div>
  );
} 