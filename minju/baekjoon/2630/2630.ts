import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);

const paper = input.slice(1).map((x) => x.split(" ").map(Number));

let white = 0;
let blue = 0;
const cut = (sr: number, sc: number, n: number) => {
  const color = paper[sr][sc];
  let isSame = true;

  for (let i = sr; i < sr + n; i++) {
    for (let j = sc; j < sc + n; j++) {
      if (paper[i][j] !== color) {
        isSame = false;
        break;
      }
    }

    if (!isSame) break;
  }

  if (isSame) {
    if (color === 0) white++;
    else blue++;
    return;
  }

  const half = Math.trunc(n / 2);
  cut(sr, sc, half);
  cut(sr, sc + half, half);
  cut(sr + half, sc, half);
  cut(sr + half, sc + half, half);
};

cut(0, 0, n);

console.log(white);
console.log(blue);
