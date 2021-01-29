# Guess the number game
import random
print('Hello, What is your name?')
name = input()
secretNumber = random.randint(1, 20)
print(f'well {name},I am thinking of a number between 1 and 20')

# ! print(f'Debug: The secret number is {str(secretNumber)}')

# *ask the player to guess 6 times
for guessesTaken in range(1, 7):
    print('take a guess.')
    guess = int(input())

    if guess < secretNumber:
        print('Your number is too low.')
    elif guess > secretNumber:
        print('Your number is too high')
    else:
        break

if guess == secretNumber:
    print(
        f'Good job,{name}! You have guessed my number in {str(guessesTaken)} guessess!')
else:
    print(f'Nope, the number I was thinking of was {str(secretNumber)}')
