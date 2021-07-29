package Lab_4.Packages.src;

public class App {
    public static void main(String[] args) throws Exception {
        Employee E = new Employee();
        E.empId = 2345;
        E.empName = "Abebe";
        E.dateOfBirth = 43;
        E.address = "Addis Ababa";
        System.out.println(E.empId);
        System.out.println(E.empName);
        System.out.println(E.dateOfBirth);
        System.out.println(E.address);

        // *E.salary()
        int empId = 2356;
        String empName = "gugugaga";
        E.salary(empId, empName);
    }
}
