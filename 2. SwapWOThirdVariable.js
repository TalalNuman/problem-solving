// How to swap two numbers without using a third variable

const swap = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
};

const obj = {
  a: 1,
  b: 2,
};

[obj.a, obj.b] = swap(obj.a, obj.b);
