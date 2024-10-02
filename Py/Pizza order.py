print("Welcome to Python pizza Deliveries!")

prices = {
    'small': {'pizza': 15, 'pepperoni': 2, 'extra_cheese': 1},
    'medium': {'pizza': 20, 'pepperoni': 3, 'extra_cheese': 1},
    'large': {'pizza': 25, 'pepperoni': 3, 'extra_cheese': 1}
}

def get_yes_or_no(prompt):
    while True:
        response = input(prompt).lower()
        if response in ['yes', 'no']:
            return response
        print("Invalid input, please enter 'yes' or 'no'")

#* Ask for the size of the pizza
while True:
    size = input("\nwhat size pizza do you want? (small, medium or large)\n").lower()
    if size in prices:
        break
    print("Invalid input, please enter 'small', 'medium', 'large'")

bill = prices[size]['pizza']

#* Ask for pepperoni
add_pepperoni = get_yes_or_no("Do you want pepperoni? (yes or no)\n").lower()
bill += prices[size]['pepperoni'] if add_pepperoni == 'yes' else 0


#* Ask for extra cheese
add_extra_cheese = get_yes_or_no("Do you want extra cheese? (yes or no)\n").lower()
bill += prices[size]['extra_cheese'] if add_extra_cheese == 'yes' else 0

#* prints the total price
print(f"Your total bill is ${bill}")