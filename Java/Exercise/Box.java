public class Box {
    double width;
    double height;
    double depth;

    // *Default constructor
    Box() {
        System.out.println("constructing box");
        width = 19;
        height = 14;
        depth = 10;
    }

    double volume() {
        return width * height * depth;
    }

}

class BoxDemo {
    public static void main(String[] args) {
        Box myBox1 = new Box();
        Box myBox2 = new Box();
        double vol;
        vol = myBox1.volume();
        System.out.println("volume is " + vol);
        vol = myBox2.volume();
        System.out.println("volume is " + vol);
    }
}
