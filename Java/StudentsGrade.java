import java.util.Scanner;

public class StudentsGrade {
    public static void main(String[] args) {
        String name;
        String sex;
        int age;
        int grade;
        Scanner stuName = new Scanner(System.in);
        System.out.print("Enter Student Name :- ");
        name = stuName.nextLine();
        Scanner stuAge = new Scanner(System.in);
        System.out.print("Enter Student Age :- ");
        age = stuAge.nextInt();
        Scanner stuSex = new Scanner(System.in);
        System.out.print("Enter Student Sex :- ");
        sex = stuSex.next();
        Scanner stuGrade = new Scanner(System.in);
        System.out.print("Enter Student grade :- ");
        grade = stuGrade.nextInt();

        if (grade >= 90) {
            System.out.println("Hi " + name + ", your grade is " + grade + ". Excellent!");
        } else if (grade > 80 && grade < 90) {
            System.out.println("Hi " + name + ", your grade is " + grade + ". Good!");
        } else if (grade < 70 && grade > 60) {
            System.out.println("Hi " + name + ", your grade is " + grade + ". Not Bad!");
        } else {
            System.out.println("Hi " + name + ", your grade is " + grade + ". Needs Improvement!");
        }

    }
}