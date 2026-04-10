import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1629";

describe("백준 1629번 - 곱셈 테스트", async () => {
  it("예제 1: 10^11 mod 12 = 4", async () => {
    const input = `10 11 12`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`4`);
  });

  it("엣지: A=1일 때", async () => {
    const input = `1 2147483647 1000`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1`);
  });

  it("엣지: B=1일 때", async () => {
    const input = `5 1 3`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2`);
  });

  it("엣지: C=1일 때 (항상 0)", async () => {
    const input = `10 10 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0`);
  });

  it("큰 수: 2^30 mod 1000000007", async () => {
    const input = `2 30 1000000007`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`73741817`);
  });
});
