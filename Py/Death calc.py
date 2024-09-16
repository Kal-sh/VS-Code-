
#! Death Calculator

def get_int_input(prompt, min_value, max_value):
    while True:
        try:
            value = int(input(prompt))
            if value < min_value or value > max_value:
                print(f"Please enter a value between {min_value} and {max_value}.")
            else:
                return value
        except ValueError:
            print("Invalid input, please enter a valid number")
            


age = get_int_input("how old are you?\n", 0, 90)
remaningYear = 90-age
daysRemaining = remaningYear*365
weeksRemaining = remaningYear*52
monthRemaining = remaningYear*12

print(
    f'you have {daysRemaining} days, {weeksRemaining} weeks and {monthRemaining} months left to Live.')
