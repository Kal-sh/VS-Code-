
#! Leap year calculator?
def get_int_value(prompt):
    while True:
        try:
            value = int(input(prompt))
            return value
        except ValueError:
            print("Invalid input. Please enter a valid number.")

def main():
    year = get_int_value("what is the year?\n")

    if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
        print(f"{year} is a leap year.")
    else:
        print(f"{year} is not a leap year")

if __name__ == "__main__":
    main()