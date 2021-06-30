import java.util.Scanner;

public class StudentsGrade {
    public static void main(String[] args) {

        String name;
        String sex;
        int age;
        float grade;

        // * Student name input from user
        Scanner student = new Scanner(System.in);
        System.out.print("Enter Student Name :- ");
        name = student.nextLine();

        // * Student Age input from user
        System.out.print("Enter Student Age :- ");
        age = student.nextInt();

        // * Student Sex input from user
        System.out.print("Enter Student Sex :- ");
        sex = student.next();

        // * Student Grade input from user
        System.out.print("Enter Student grade :- ");
        grade = student.nextFloat();

        // * Remarks calculator
        if (grade > 0 && grade < 100) {
            System.out.println("Invalid input");
            if (grade >= 90) {
                System.out.println("Student " + name + ", Gender " + sex + ", Age " + age + ", your grade is " + grade
                        + ". Excellent!");
            } else if (grade > 80 && grade < 90) {
                System.out.println("Student " + name + ", Gender " + sex + ", Age " + age + ", your grade is " + grade
                        + ". Good!");
            } else if (grade < 70 && grade > 60) {
                System.out.println("Student " + name + ", Gender " + sex + ", Age " + age + ", your grade is " + grade
                        + ". Not Bad!");
            } else {
                System.out.println("Student " + name + ", Gender " + sex + ", Age " + age + ", your grade is " + grade
                        + ". Needs Improvement!");
            }
        }
    }
}