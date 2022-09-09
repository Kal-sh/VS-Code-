import java.util.Random;

public class diceGame {

    public static void main(String[] args) {
        Random Dice = new Random();
        int x = Dice.nextInt(6) + 1;

        System.out.println("You rolled a: " + x);
    }
}
