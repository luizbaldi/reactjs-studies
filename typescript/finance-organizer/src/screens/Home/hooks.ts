import { Month } from './types';

export const useMonthsData = (): Month[] => {
  return [
    {
      name: 'January',
      disabled: false,
      bills: [
        {
          id: 1,
          done: false,
          label: 'Do stuff'
        },
        {
          id: 2,
          done: true,
          label: 'Do more'
        }
      ]
    },
    {
      name: 'February',
      disabled: false,
      bills: []
    },
    {
      name: 'March',
      disabled: false,
      bills: []
    },
    {
      name: 'April',
      disabled: false,
      bills: []
    },
    {
      name: 'May',
      disabled: false,
      bills: []
    },
    {
      name: 'June',
      disabled: false,
      bills: []
    },
    {
      name: 'July',
      disabled: false,
      bills: []
    },
    {
      name: 'August',
      disabled: false,
      bills: []
    },
    {
      name: 'September',
      disabled: false,
      bills: []
    },
    {
      name: 'October',
      disabled: false,
      bills: []
    },
    {
      name: 'November',
      disabled: false,
      bills: []
    },
    {
      name: 'December',
      disabled: false,
      bills: []
    }
  ];
};
