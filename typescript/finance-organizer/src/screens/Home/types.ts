import { Month } from '../../utils/types';

export type Colors = 'empty' | 'progress' | 'completed' | 'disabled';

export type MonthInfo = {
  progress: number;
  total: number;
  progressKey: Colors;
  month?: Month;
};
