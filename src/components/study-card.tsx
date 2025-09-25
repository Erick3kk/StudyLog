import type { StudySession } from "../types/study";

interface StudyCardProps {
  study: StudySession;
}

export function StudyCard({ study }: StudyCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl mx-auto border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="mb-2 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-blue-700">
          {study.subject}
        </h2>
        <p className="text-gray-600">Data: {study.date}</p>
      </div>

      <div className="text-gray-700 mb-3">
        <p className="mb-1">
          <strong>Duração:</strong> {study.minutes} minutos
        </p>
        <p className="mb-1">
          <strong>Dificuldade:</strong> {study.dificuldade}
        </p>
      </div>
    </div>
  );
}
