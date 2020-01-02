import { getMonth } from '../../utils/storage';
import { Colors, MonthInfo } from './types';

const getProgressKey = (progress?: number, total?: number): Colors => {
  if (progress === 0) return 'empty';

  if (typeof progress === 'number' && typeof total === 'number') {
    if (progress < total) {
      return 'progress';
    }

    if (progress === total) return 'completed';
  }

  return 'disabled';
};

export const getMonthInfo = async (monthName: string): Promise<MonthInfo> => {
  const month = await getMonth(monthName);

  if (!month) {
    return {
      progressKey: getProgressKey(),
      progress: 0,
      total: 0
    };
  }

  const { bills } = month;
  const progress = bills.filter(({ done }: { done: boolean }) => done).length;
  const total = bills.length;

  return {
    progress,
    total,
    progressKey: getProgressKey(progress, total),
    month
  };
};

export const getMonths = () => {
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
};
