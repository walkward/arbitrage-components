// Parse CSS units and return values for mathmatics
const parse = (left, right) => {
  if (typeof left !== 'string') throw new Error('First argument should be a string.');
  const value = val => (typeof val === 'string' ? Number(val.replace(/[A-z]+$/, '')) : val);
  return {
    unit: left.replace(/^\d+/, ''),
    left: value(left),
    right: value(right),
  };
};

export const divide = (left, right) => {
  const values = parse(left, right);
  return `${values.left / values.right}${values.unit}`;
};

export const add = (left, right) => {
  const values = parse(left, right);
  return `${values.left + values.right}${values.unit}`;
};

export const multiply = (left, right) => {
  const values = parse(left, right);
  return `${values.left * values.right}${values.unit}`;
};

export const subtract = (left, right) => {
  const values = parse(left, right);
  return `${values.left - values.right}${values.unit}`;
};
