export interface Itodo {
  id?: number;
  content?: string;
  isCheck?: boolean;
}

export type PriorityType = 'low' | 'medium' | 'high';
export type StatusKey = 'Todo' | 'InProgress' | 'Done';
