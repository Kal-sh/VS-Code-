package Class;

import java.util.Scanner;
// import java.lang.*;

public class Exercise1 {
    public static void main(String[] args) {
        /**
         * //*for loop for (int x = 0; x < 6; x++) { System.out.println(x); }
         * 
         * 
         * //*while int x = 3; while (x < 6) { System.out.println(x); x++; } //*do while
         * int =0; do{ System.out.println(x); x++; }while(x>6);
         * 
         * //*nested loop for(int x=0; x<6;x++){ for(int i=0;i<0;i++){
         * System.out.println(i*x); } }
         * 
         * for (int x = 0; x < 5; x++) { for (int i = 0; i < x; i++) {
         * System.out.print(i); } System.out.print("\n"); }
         * 
         * for (int x = 0; x < 6; x++) { if (x == 3) { continue; } else {
         * System.out.println(x); }
         * 
         * }
         * 
         * for (int x = 0; x < 3; x++) { for (int i = 0; i < 6; i++) {
         * System.out.print(i + " "); } System.out.print("\n"); }
         * 
         * int sum = 0; int[] x; x = new int[] { 5, 8, 6, 9 }; for (int i = 0; i < 3;
         * i++) { sum += x[i]; } System.out.println(sum);
         */

        Scanner xx = new Scanner(System.in);
        int[] x = new int[5];
        for (int i = 0; i < 5; i++) {
            System.out.println("enter your value ");
            x[i] = xx.nextInt();
        }
        for (int j = 0; j < 5; j++) {
            System.out.println("enter second value");
            System.out.println(x[j]);
        }
    }
}
