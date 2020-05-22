/**
 * https://redux.js.org/recipes/reducing-boilerplate
 * @param type
 * @param argNames
 * @returns {Function}
 */
export const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };

  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });

  return action;
};
