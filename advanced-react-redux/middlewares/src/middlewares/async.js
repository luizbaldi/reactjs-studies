export default ({ dispatch }) => next => action => {
  /* If action doesn't have a payload, or the
    payload doesn't have a .then property, call next
  */
  if (!action.payload || !action.payload.then) {
    return next(action)
  }

  action.payload.then(({ data }) => {
    const newAction = { ...action, payload: data }
    dispatch(newAction)
  })
} 
