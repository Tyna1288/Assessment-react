const unroll = require("./unroll");

const smallSquare = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

const regSquare = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const bigSquare = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
]

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
  it("unroll(smallSquare) equals ['a','b','c','f','i','h','g','d','e']", function () {
    expect(unroll(smallSquare)).toEqual(['a','b','c','f','i','h','g','d','e']);
  });
  it("unroll(regSquare) equals [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]", function () {
    expect(unroll(regSquare)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });
  it("unroll(bigSquare) equals [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]", function () {
    expect(unroll(bigSquare)).toEqual([1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]);
  });

});