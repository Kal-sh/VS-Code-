# * treasure island

print("Welcome to Treasure Island.")
print("Your mission is to find the treasure.\n")

print(
    '''
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."` . "-. /_______________|________
|                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/______/_
*******************************************************************************
'''
)

while True:
    choice = input(
        "You are standing on a small island. In front of you is a cross road. where do you want to go? type 'left' or 'right'\n"
    ).lower()
    if choice in ["left", "right"]:
        break
    print("Invalid choice, please choose 'left' or 'right'")

# * Ask for which direction they want to go
if choice == "left":
    while True:
        swim = input(
            "You come to a lake. There is an island in the middle of the lake. Type 'wait' to wait for a boat. Type 'swim' to swim across\n"
        ).lower()
        if swim in ["wait", "swim"]:
            break
        print("Invalid choice, please choose 'wait' or 'swim'")

    # * Ask if they want to wait for the boat or swim
    if swim == "wait":
        while True:
            door = input(
                "You have arrived at the island unharmed. There is a house with 3 doors. one is red, one yellow and the other is blue. which color do you choose\n"
            ).lower()
            if door in ["red", "yellow", "blue"]:
                break
            print("Invalid choice, please choose 'red', 'yellow' or 'blue'")

        # * Ask for them to choose the color of the door
        if door == "yellow":
            print("Congratulation, you have found the treasure!!!")
        elif door == "blue":
            print("You have entered a room full of beasts .Game over!")
        else:
            print("You fall fallen into a fire. Game over!")
    else:
        print("You got attacked by crocodile. Game Over!")
else:
    print("You fell into a hole. Game Over!")
