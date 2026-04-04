package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_1912 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int current = Integer.parseInt(st.nextToken()); // 첫번째 값
        int max = current;

        for (int i = 0; i < n-1; i++) {
            int num = Integer.parseInt(st.nextToken());

            current = Math.max(current + num, num); // 다음값을 합한 게 더 커, 아님 지금이 더 커?
            max = Math.max(max, current);
        }

        System.out.println(max);
    }
}
