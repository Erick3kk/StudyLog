import type { Dificuldade } from "./dificuldade";

export interface StudySession {
  id: string;
  subject: string;   
  minutes: number;   
  dificuldade: Dificuldade;
  date: string;      
}