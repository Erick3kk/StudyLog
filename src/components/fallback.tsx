import type { FallbackProps } from "react-error-boundary";

export function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="max-w-md mx-auto mt-20 text-center">
      <h2 className="text-lg font-medium text-gray-800 mb-2">Algo deu errado</h2>
      <p className="text-sm text-gray-500 mb-4">{error.message}</p>

      <button
        onClick={resetErrorBoundary}
        className="text-sm text-gray-700 underline hover:text-gray-900"
      >
        Tentar novamente
      </button>
    </div>
  );
}
