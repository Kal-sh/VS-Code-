public class Box1 {
    private double width;
    private double height;
    private double depth;

    Box1(Box1 ob) {
        width = ob.width;
        height = ob.height;
        depth = ob.depth;
    }

    // *constructor when no dimension is used
    Box1() {
        width = -1;
        height = -1;
        depth = -1;
    }
}
