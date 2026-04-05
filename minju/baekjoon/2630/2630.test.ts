import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2630";

describe("백준 2630번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`9
7`);
  });
});
