import { CHANGE_AUTH } from './types'

export const auth = (isLogged) => ({
  type: CHANGE_AUTH,
  payload: isLogged
})
