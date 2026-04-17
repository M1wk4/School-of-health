import { File } from "./file.types";

export type LessonId = string;

export type LessonsMap = Record<LessonId, Lesson>;

export type LessonContentBlock =
  | { type: "title"; text: string }
  | { type: "subtitle"; text: string }
  | { type: "paragraph"; text: string, subText?: LessonContentBlock[] }
  | { type: "formula"; text: string }
  | { type: "ol"; content: LessonContentBlock[]; colors?: string[] }
  | { type: "ul"; content: LessonContentBlock[]; colors?: string[] }
  | { type: "presentation" }
  | { type: "preview" }
  | { type: "files" };

export type Lesson = {
  lessonName: string;
  label: string;
  lessonFiles?: string[];
  lessonFolder?: string;
  content?: LessonContentBlock[];
  fileList?: File[];
  previewList?: string[]; 
};
