export interface Question {
  id?: string;
  title: string
  observations: string|null;
  answers: Answer[];
  created_at?: string;
  updated_at?: string;
  topic?: Topic|null;
  lesson?: Lesson|null;
  helps?: Help[];
  tags?: Tag[];
}

export interface Help {
  id?: string;
  title: string;
  content: string;
  mimetype: string;
  created_at?: string;
  updated_at?: string|null;
  topic?: Topic|null;
  book?: Book|null;
  lesson?: Lesson|null;
}

export interface Answer {
  id?: string;
  text: string;
  position: number;
  result: boolean;
}

export interface Topic {
  id?: string;
  description: string;
}

export interface Book {
  id?: string;
  title: string;
  author?: string|null;
}

export interface Lesson {
  id?: string;
  book?: Book|null;
  description: string;
  position: number;
}

export interface Tag {
  raw_text: string;
  slug: string|null;
  id?: string;
  created_at?: string;
}
