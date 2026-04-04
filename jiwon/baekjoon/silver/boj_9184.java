package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_9184 {
    public static int[][][] dp = new int[21][21][21]; // 20보다 클 때 w 결과값을 사용하기 때문

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        while (true) {
            st = new StringTokenizer(br.readLine(), " ");
            int[] nums = new int[3];

            for (int i = 0; i < 3; i++) {
                nums[i] = Integer.parseInt(st.nextToken());
            }

            if (nums[0] == -1 && nums[1] == -1 && nums[2] == -1) {
                break;
            }

            int result = w(nums[0], nums[1], nums[2]);
            print(nums[0], nums[1], nums[2], result);
        }
    }

    static int w(int a, int b, int c) {
        if (a <= 0 || b <= 0 || c <= 0) {
            return 1;
        }

        if (a > 20 || b > 20 || c > 20) {
            return w(20, 20, 20);
        }

        // 이미 계산된 값이면 계산할 필요 없음
        if (dp[a][b][c] != 0) {
            return dp[a][b][c];
        }

        if (a < b && b < c) {
            dp[a][b][c] = w(a, b, c - 1)
                    + w(a, b - 1, c - 1)
                    - w(a, b - 1, c);
        } else {
            dp[a][b][c] = w(a - 1, b, c)
                    + w(a - 1, b - 1, c)
                    + w(a - 1, b, c - 1)
                    - w(a - 1, b - 1, c - 1);
        }

        return dp[a][b][c];
    }

    private static void print(int num1, int num2, int num3, int result) {
        System.out.println("w(" + num1 + ", " + num2 + ", " + num3 + ") = " + result);
    }
}
