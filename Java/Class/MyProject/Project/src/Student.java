package MyProject.Project.src;

public class Student {
    String sname;
    int sid;

    int disp(int x, int y) {

        int sum = x + y;
        return sum;
    }

    void disArr(int[] y) {
        y[1] = 26;
        System.out.println(y[1]);
        for (int i = 0; i < y.length; i++) {
            System.out.println(y[i]);
        }
    }

    void disStud(String sname, int sid) {
        sname = sname;
    }
}
