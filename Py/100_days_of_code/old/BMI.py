#! BMI Calculator

def get_float_input(prompt, min_value, max_value):
    while True:
        try:
            value = float(input(prompt))
            if min_value <= value <= max_value:
                return value
            else:
                print(f"Invalid input. Please enter a value between {
                      min_value} and {max_value}.")
        except ValueError:
            print("Invalid input. Please enter a valid number.")


height = get_float_input('What is your Height in m:\n', 0.5, 4)
weight = get_float_input('What is your Weight in kg:\n', 30, 500)

BMI = weight/height**2

if BMI < 18.5:
    print(f'Your BMI is {BMI:.2f}, your are skinny AF.')
elif 18.5 <= BMI < 25:
    print(f'Your BMI is {BMI:.2f}, your are on your way to be a fattie.')
elif 25 <= BMI < 30:
    print(f'Your BMI is {BMI:.2f}, your are a fattie.')
else:
    print(f'Your BMI is {BMI:.2f}, your are fucked piggie.')
