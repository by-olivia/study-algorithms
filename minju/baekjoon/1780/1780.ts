/**
 * 백준 : 1780번 문제 풀기
 */

import { readFileSync } from 'fs'

const input = readFileSync('/dev/stdin', 'utf8').split('\n')
const n = Number(input[0])
const data = input.slice(1).map((x) => x.split(' ').map(Number))

const cnt = [0, 0, 0] // 0: -1, 1: 0, 2: 1;

const solution = (sr: number, sc: number, lr: number, lc: number) => {
	const check = data[sr][sc]

	for (let i = sr; i < lr; i++) {
		for (let j = sc; j < lc; j++) {
			if (check !== data[i][j]) {
				const size = (lr - sr) / 3

				for (let i = 0; i < 3; i++) {
					for (let j = 0; j < 3; j++) {
						solution(
							sr + size * i,
							sc + size * j,
							sr + size * (i + 1),
							sc + size * (j + 1),
						)
					}
				}

				return
			}
		}
	}

	cnt[check + 1]++
}

solution(0, 0, n, n)
console.log(cnt.join('\n'))
