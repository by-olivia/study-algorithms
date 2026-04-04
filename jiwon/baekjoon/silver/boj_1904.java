package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class boj_1904 {
    public static int[] dp;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        if (n == 1 || n == 2) {
            System.out.println(n);

        } else {
            dp = new int[n+1];

            dp[1] = 1;  // 1
            dp[2] = 2;  // 00, 11

            for (int i = 3; i <= n; i++) {
                dp[i] = (dp[i-1] + dp[i-2]) % 15746;
            }

            System.out.println(dp[n]);
        }
    }
}

/**
 * 1
 * 00, 11
 * 001, 100, 111
 * 0011, 0000, 1001, 1100, 1111
 */