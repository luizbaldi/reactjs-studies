import { Bill } from '../screens/Home/types';

export type Month = {
  name: string;
  disabled: boolean;
  bills: Bill[];
};
