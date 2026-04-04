package baekjoon.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class boj_24416 {
    public static int result1 = 0;
    public static int result2 = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        fib(n);
        fibonacci(n);

        System.out.println(result1 + " " + result2);
    }

    // 방법1: 재귀
    private static int fib(int n) {
        if (n == 1 || n == 2) {
            result1 += 1;
            return 1;
        } else {
            return fib(n - 1) + fib(n - 2);
        }
    }

    // 방법2: DP
    public static int fibonacci(int n) {
        int[] f = new int[n + 1];

        f[1] = 1;
        f[2] = 1;

        for (int i = 3; i <= n; i++) {
            result2 += 1;
            f[i] = f[i - 1] + f[i - 2];
        }

        return f[n];
    }
}
