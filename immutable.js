const data = {
  a: 1,
  b: 2,
  c: 3,
  array: [1, 2, 3]
};


// const copy = { ...data, a: 4 };
// copy.array = [...copy.array, 4]

const array = [...data.array, 4];

const copy = { ...data, array};

console.log(data);
console.log(copy);