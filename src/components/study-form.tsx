import { useState } from "react";
import type { Dificuldade } from "../types/dificuldade";
import type { StudySession } from "../types/study";

interface StudyFormProps {
  onAdd: (study: StudySession) => void;
}

export function StudyForm({ onAdd }: StudyFormProps) {
  const [subject, setSubject] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [dificuldade, setDificuldade] = useState<Dificuldade>(1);
  const [date, setDate] = useState("");

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const study: StudySession = {
      id: crypto.randomUUID(),
      subject,
      minutes,
      dificuldade,
      date,
    };

    onAdd(study);

    setSubject("");
    setMinutes(0);
    setDificuldade(1);
    setDate("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 mb-5 w-4/5"
    >
      <label htmlFor="study-subject">Assunto do estudo</label>
      <input
        type="text"
        id="study-subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="assunto do estudo"
        className="border rounded p-2"
      />

      <label htmlFor="study-minutes">Duração (min)</label>
      <input
        type="number"
        id="study-minutes"
        value={minutes}
        onChange={(e) => setMinutes(Number(e.target.value))}
        placeholder="Duração (min)"
        className="border rounded p-2"
      />

      <label htmlFor="study-dificuldade">Dificuldade</label>
      <input
        type="number"
        id="study-dificuldade"
        value={dificuldade}
        onChange={(e) => setDificuldade(Number(e.target.value) as Dificuldade)}
        placeholder="Dificuldade"
        min={1}
        max={3} // Ajustado para max=3, pois Dificuldade só vai até 3
        className="border rounded p-2"
      />

      <label htmlFor="study-date">Dia de estudo</label>
      <input
        type="date"
        id="study-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Dia de estudo"
        className="border rounded p-2"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Adicionar estudo
      </button>
    </form>
  );
}