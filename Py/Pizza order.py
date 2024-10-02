print("Welcome to Python pizza Deliveries!")
prices = {
    'small': {'pizza': 15, 'pepperoni': 2, 'extra_cheese': 1},
    'medium': {'pizza': 20, 'pepperoni': 3, 'extra_cheese': 1},
    'large': {'pizza': 25, 'pepperoni': 3, 'extra_cheese': 1}
}


while True:
    size = input("what size pizza do you want? (small, medium or large)\n").lower()
    if size in prices:
        break
    print("Invalid input, please enter 'small', 'medium', 'large'")

bill = prices[size]['pizza']

while True:
    add_pepperoni = input("Do you want pepperoni? (yes or no)\n").lower()
    if add_pepperoni in ['yes', 'no']:
        break
    print("invalid input, please enter 'yes' or 'no'")


if add_pepperoni == 'yes':
    bill += prices[size]['pepperoni']

while True:
    add_extra_cheese = input("Do you want extra cheese? (yes or no)\n").lower()
    if add_extra_cheese in ['yes', 'no']:
        break
    print("invalid input, please enter 'yes' or 'no'")

if add_extra_cheese == 'yes':
    bill += prices[size]['extra_cheese']

print(f"Your total bill is ${bill}")