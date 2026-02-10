
export interface VocabItem {
  word: string;
  ipa: string;
  form: string; // Added word form property
  meaningEn: string;
  meaningVi: string;
  exampleEn: string;
  exampleVi: string;
}

export interface Exercise {
  id: string;
  type: 'fill' | 'mcq' | 'complete' | 'meaning';
  questionEn: string;
  questionVi: string;
  options?: string[];
  correctAnswer: string;
  hint?: string;
}

export interface GrammarLesson {
  id: string;
  topic: string;
  focus: string;
  explanation: string;
  explanationVi: string;
  storyEn: string[];
  storyVi: string[];
  vocabulary: VocabItem[];
  exercises: Exercise[];
  rearrangeExercises: {
    sentenceEn: string;
    sentenceVi: string;
  }[];
}

export type Page = 'home' | 'flashcards' | 'grammar' | 'rearrange' | 'about';
