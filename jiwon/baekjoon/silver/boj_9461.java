package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class boj_9461 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());

        for (int i = 0; i < t; i++) {
            int n = Integer.parseInt(br.readLine());

            if (n == 1 || n == 2 || n == 3) {
                System.out.println(1);
            } else {
                long[] result = new long[n];
                result[0] = 1;
                result[1] = 1;
                result[2] = 1;

                for (int j = 3; j < n; j++) {
                    result[j] = result[j-3] + result[j-2];
                }

                System.out.println(result[n-1]);
            }
        }
    }
}

/**
 * 1, 1, 1, 2, 2, 3, 4, 5, 7, 9
 */