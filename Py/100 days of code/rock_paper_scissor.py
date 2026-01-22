# rock paper
import random

rock = '''
          _______
      ---'   ____)
            (_____)
            (_____)
            (____)
      ---.__(___)
'''


paper = '''
         _______
      ---'   ____)____
                ______)
                _______)
               _______)
      ---.__________)
'''

scissors = '''
          _______
      ---'   ____)____
                ______)
             __________)
            (____)
      ---.__(___)
'''

game_images = [rock, paper, scissors]


user_choise = int(input(
    "what do you choose? Type 0 for rock, 1 for paper or 2 for scissors: "))
if user_choise >= 3 or user_choise < 0:
    print("invalid choise, you lose!")
else:
    print("user choise:\n")
    print(game_images[user_choise])

    computer_choise = random.randint(0, 2)
    print("computer chose:\n ")
    print(game_images[computer_choise])

    if user_choise == 0 and computer_choise == 2:
        print("rock beats scissors, You won!")
    elif computer_choise == 0 and user_choise == 2:
        print("rock beats scissors, You lose!")
    elif computer_choise < user_choise:
        print("you win")
    elif user_choise < computer_choise:
        print("you lose")
    elif user_choise == computer_choise:
        print("its a draw")
