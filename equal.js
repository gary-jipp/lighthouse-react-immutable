let state;

const setState = function(value) {
  if (value === state) {
    console.log("No Change:", state, "->", value);
    return;
  }

  console.log("State Change:", state, "->", value);
  state = value;
};

const array = [1, 2, 3];
setState(array);

array.push(4);
setState(array);

const newArray = [...state]
setState(newArray);
