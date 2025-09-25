import { useMemo } from "react";
import { StudyForm } from "../components/study-form";
import type { StudySession } from "../types/study";

interface AddStudyProps {
  studies: StudySession[];
  onAdd: (study: StudySession) => void;
}

export function AddStudy({ onAdd, studies }: AddStudyProps) {
  
  const studyTotal = useMemo(() => {
    return studies.length;
  }, [studies]);

  const studyMinutes = useMemo(() => {
    let studyMinutes: number = 0;

    studies.forEach((study) => {
      studyMinutes += study.minutes;
    });

    const hours = Math.floor(studyMinutes / 60);
    const minutes = studyMinutes % 60;

    return `${hours}:${minutes}`;
  }, [studies]);

  return (
    <>
      <h2 className="font-bold text-blue-800 text-xl mb-3">
        Adicionar novo estudo
      </h2>

      <p className="text-lg font-bold text-gray-600">
        Total de estudos: {studyTotal}
      </p>

      <p>Tempo de estudo: {studyMinutes} horas</p>

      <StudyForm onAdd={onAdd} />
    </>
  );
}