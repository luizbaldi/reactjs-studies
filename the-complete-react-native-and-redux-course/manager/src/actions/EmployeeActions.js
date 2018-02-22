import { EMPLOYEE_INPUT_UPDATE } from './types';

export const onInputUpdate = (prop, value) => {
  return {
    type: EMPLOYEE_INPUT_UPDATE,
    payload: { prop, value }
  }
};