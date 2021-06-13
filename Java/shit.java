public class shit {
    public static void main(String[] args) {
        int results = 0;
        for (int i = 0; i < 6; i++) {
            if (i == 3) {
                results += 10;
            } else {
                results += i;
            }
        }
        System.out.println(results);
    }

}
