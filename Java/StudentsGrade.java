import java.util.Scanner;

public class StudentsGrade {
    public static void main(String[] args) {

        String name;
        String sex;
        int age;
        float grade;

        // * Student name input from user
        Scanner stuName = new Scanner(System.in);
        System.out.print("Enter Student Name :- ");
        name = stuName.nextLine();

        // * Student Age input from user
        Scanner stuAge = new Scanner(System.in);
        System.out.print("Enter Student Age :- ");
        age = stuAge.nextInt();

        // * Student Sex input from user
        Scanner stuSex = new Scanner(System.in);
        System.out.print("Enter Student Sex :- ");
        sex = stuSex.next();

        // * Student Grade input from user
        Scanner stuGrade = new Scanner(System.in);
        System.out.print("Enter Student grade :- ");
        grade = stuGrade.nextFloat();

        // * Remarks calculator
        if (grade >= 90) {
            System.out.println("Student " + name + ", Gender " + sex + ", Age " + age + ", your grade is " + grade
                    + ". Excellent!");
        } else if (grade > 80 && grade < 90) {
            System.out.println(
                    "Student " + name + ", Gender " + sex + ", Age " + age + ", your grade is " + grade + ". Good!");
        } else if (grade < 70 && grade > 60) {
            System.out.println(
                    "Student " + name + ", Gender " + sex + ", Age " + age + ", your grade is " + grade + ". Not Bad!");
        } else {
            System.out.println("Student " + name + ", Gender " + sex + ", Age " + age + ", your grade is " + grade
                    + ". Needs Improvement!");
        }

    }
}