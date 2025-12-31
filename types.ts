
// Define the core types and enums for the quiz application to resolve "not a module" errors.
export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  FILL_IN_BLANK = 'FILL_IN_BLANK'
}

export interface Question {
  id: number;
  type: QuestionType;
  questionText: string;
  correctAnswer: string;
  explanation: string;
  audioUrl?: string;
  options?: string[];
}

export interface UserAnswer {
  questionId: number;
  answer: string;
  isCorrect: boolean;
}
