package Exercise;

// import java.util.Scanner;
class Vehicle {
    private String color;

    // *getter
    public String getColor() {
        return color;
    }

    // *setter
    public void setColor(String c) {
        this.color = c;
    }
}

public class Vehicle_program {
    public static void main(String[] args) {
        Vehicle v1 = new Vehicle();
        v1.setColor("red");

        System.out.println(v1.getColor());
    }
}