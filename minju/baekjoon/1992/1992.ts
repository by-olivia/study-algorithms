

import { readFileSync } from 'fs'

const input = readFileSync('/dev/stdin', 'utf8').split('\n')
const n = Number(input[0])
const data = input.slice(1).map((x) => x.split('').map(Number))

const result: string[] = []

const solution = (sc: number, sr: number, lc: number, lr: number) => {
	const check = data[sc][sr]

	const mc = (sc + lc) / 2
	const mr = (sr + lr) / 2

	for (let i = sc; i < lc; i++) {
		for (let j = sr; j < lr; j++) {
			if (check !== data[i][j]) {
				result.push('(')
				solution(sc, sr, mc, mr) // 왼쪽 위
				solution(sc, mr, mc, lr) // 오른쪽 위
				solution(mc, sr, lc, mr) // 왼쪽 아래
				solution(mc, mr, lc, lr) // 오른쪽 아래
				result.push(')')
				return
			}
		}
	}

	result.push(check.toString())
}

solution(0, 0, n, n)

console.log(result.join(''))
