/**
 * 백준 : 1629번 문제 풀기
 * https://www.acmicpc.net/problem/1629
 *
 * 분류: 분할정복을 이용한 거듭제곱
 * 난이도: Silver 1
 * 제한: 시간 0.5초 / 메모리 128MB
 *
 * [접근 방법을 여기에 메모하세요]
 */

import { readFileSync } from 'fs'

const input = readFileSync('/dev/stdin', 'utf8').split(' ').map(Number)
const [A, B, C] = input

const power = (a: bigint, b: bigint, c: bigint): bigint => {
        if (b === 1n) return a % c
    
       const half = power(a, b / 2n, c)
    
        if (b % 2n === 0n) return (half * half) % c
    else return (half * half % c * a) % c
 }

 console.log(power(BigInt(A), BigInt(B), BigInt(C)).toString());
