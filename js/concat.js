export const plus = (a, b) => a + b;
export const minus = (a, b) => a - b;
export const times = (a, b) => a * b;
export const divBy = (a, b) => a / b;

export const dup = a => ({ _smush: [a, a] });
export const drop = a => ({ _smush: [] });
export const swap = (a, b) => ({ _smush: [b, a] });
export const rot = (a, b, c) => ({ _smush: [b, a, c] });
export const over = (a, b) => ({ _smush: [a, b, a] });

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
