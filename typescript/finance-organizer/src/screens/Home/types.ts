export type Colors = 'empty' | 'progress' | 'completed' | 'disabled';

export type Bill = {
  id: number;
  label: string;
  done: boolean;
};

export type Month = {
  name: string;
  disabled: boolean;
  bills: Bill[];
};
