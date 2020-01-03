export type Bill = {
  id: string;
  label: string;
  done: boolean;
  price: number;
};

export type Month = {
  name: string;
  disabled: boolean;
  bills: Bill[];
};
