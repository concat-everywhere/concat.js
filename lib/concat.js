export * from './math.js';
export * from './shuffle.js';

export const _smush = (...a) => ({ _smush: a });

const concatApply = (rawStack, term) => {
  if (typeof term !== 'function') return [...rawStack, term];

  const stack = term.length != 0 ? rawStack.slice(0, -term.length) : rawStack;
  const args = rawStack.slice(-term.length);
  const result = term(...args);

  return result === undefined
    ? stack
    : result.hasOwnProperty('_smush')
      ? [...stack, ...result._smush]
      : [...stack, result];
};

export const concat = (...things) => things.reduce(concatApply, []);
