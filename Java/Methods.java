public class Methods {
    public static void main(String[] args) {
        calculateScore(true, 800, 5, 100);
        calculateScore(true, 1000, 8, 200);

        int highScorePosition = calculateHighScorePosition(1500);
        displayHighScorePosition("yono", highScorePosition);
        highScorePosition = calculateHighScorePosition(900);
        displayHighScorePosition("tona", highScorePosition);
        highScorePosition = calculateHighScorePosition(400);
        displayHighScorePosition("tagi", highScorePosition);
        highScorePosition = calculateHighScorePosition(50);
        displayHighScorePosition("doma", highScorePosition);
        highScorePosition = calculateHighScorePosition(11150);
        displayHighScorePosition("dodoma", highScorePosition);
    }

    public static int calculateScore(boolean gameOver, int score, int levelCompleted, int bonus) {
        if (gameOver) {
            int finalScore = score + (levelCompleted * bonus);
            finalScore += 2000;
            System.out.println("Your final score is " + finalScore);
            return finalScore;
        }
        return -1;
    }

    public static void displayHighScorePosition(String playerName, int highScorePosition) {
        System.out.println(
                playerName + " managed to get into position " + highScorePosition + " on the high score table.");
    }

    public static int calculateHighScorePosition(int playerScore) {
        if (playerScore >= 1000) {
            return 1;
        } else if (playerScore >= 500 && playerScore < 1000) {
            return 2;
        } else if (playerScore >= 100 && playerScore < 500) {
            return 3;
        } else {
            return 4;
        }
    }
}