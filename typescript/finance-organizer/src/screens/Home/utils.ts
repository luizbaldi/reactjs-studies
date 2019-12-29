const colors = {
  empty: ['#ef9a9a', '#ef5350', '#e53935'],
  progress: ['#FFCC80', '#FFB74D', '#FFA726'],
  completed: ['#AED581', '#9CCC65', '#8BC34A'],
  disabled: ['#CFD8DC', '#B0BEC5', '#90A4AE']
};

type Colors = 'empty' | 'progress' | 'completed' | 'disabled';

const getColorKey = (progress: number | null, total: number): Colors => {
  if (progress === 0) return 'empty';

  if (typeof progress === 'number' && progress < total) return 'progress';

  if (progress === total) return 'completed';

  return 'disabled';
};

export const getMonthInfo = () => {
  /* temporary mock */
  const progress = 6;
  const total = 6;
  const colorKey = getColorKey(progress, total);

  return { progress, total, bgColor: colors[colorKey] };
};
