const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" ||
      position > this.arr.length - 1 ||
      position <= 0) {
      this.arr = [];
      throw new Error('wrong position');
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = "";
    for (let i = 0; i < this.arr.length; i++) {
      if (i == 0) {
        str += `( ${this.arr[i]} )`;
      } else {
        str += `~~( ${this.arr[i]} )`;
      }
    }
    this.arr = [];
    return str;
  }
};

module.exports = chainMaker;
