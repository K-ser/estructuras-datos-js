/*
      2--0
    /   \
    1 -- 3
    */

//Formas de representar grafos
//Edge List 
const graph = [
  [2, 0],
  [2, 1],
  [2, 3],
  [1, 3],
];

//Adjacent List 
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

const graph3 = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2]
};

//Adjacent Matrix 
const graph4 = [
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0]
];

const graph5 = {
  0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0]
}