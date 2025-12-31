
import { Question, QuestionType } from './types';

// Define and export the quiz data constants used throughout the application.
export const QUIZ_DATA: Question[] = [
  {
    id: 1,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Which word has a different sound: (A) city, (B) cat, (C) center, (D) cycle",
    correctAnswer: "cat",
    explanation: "In 'cat', 'c' is pronounced as /k/, while in the others it is pronounced as /s/.",
    options: ["city", "cat", "center", "cycle"]
  },
  {
    id: 2,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I usually ____ up at 6:30 in the morning.",
    correctAnswer: "get",
    explanation: "With the subject 'I' in the present simple, we use the base form of the verb 'get'.",
    audioUrl: ""
  },
  {
    id: 3,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Choose the odd one out: (A) Spring, (B) Summer, (C) Season, (D) Winter",
    correctAnswer: "Season",
    explanation: "Spring, Summer, and Winter are names of specific seasons, while 'Season' is the general term.",
    options: ["Spring", "Summer", "Season", "Winter"]
  },
  {
    id: 4,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Complete: She is ____ English right now.",
    correctAnswer: "learning",
    explanation: "We use the present continuous (am/is/are + V-ing) for actions happening 'right now'.",
    audioUrl: ""
  }
];
