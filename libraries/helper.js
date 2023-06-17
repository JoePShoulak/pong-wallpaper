Array.prototype.firstReturn = function (callback) {
  let result;

  for (let i = 0; i < this.length; i++) {
    result = callback(this[i]);
    if (result) break;
  }

  return result;
};

const firstReturn = (arr, callback) => {
  let result;

  for (let i = 0; i < arr.length; i++) {
    result = callback(arr[i]);
    if (result) break;
  }

  return result;
};

const tempStyle = drawCB => {
  push();
  drawCB();
  pop();
};
