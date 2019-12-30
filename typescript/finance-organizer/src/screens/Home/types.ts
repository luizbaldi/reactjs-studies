export type Colors = 'empty' | 'progress' | 'completed' | 'disabled';

export type Goal = {
  id: number;
  label: string;
  done: boolean;
};

export type Month = {
  name: string;
  disabled: boolean;
  goals: Goal[];
};
