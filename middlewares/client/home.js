export default () => next => action => {
  const ret = next(action);

  return ret;
};