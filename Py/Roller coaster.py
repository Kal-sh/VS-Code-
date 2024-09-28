def get_int_input(prompt):
    while True:
        try:
            value = int(input(prompt))
            return value
        except ValueError:
            print("Invalid input, Please enter a valid Number")

def main():
    height = get_int_input("How tall are you?\n")
    price = {"child":7, "adult":12}
    photo_price = 3
    bill = 0

    if  height < 120:
        print("Sorry, you don't meet the minimum requirement to ride the roller coaster")
    else:
        age = get_int_input("How old are you?\n")

        #* check eligibility
        if age < 5 or age > 70:
            print("Sorry, you are not eligible for this ride")
        else:
            print("yes, you are eligible for this ride")

            #* Determine ticket price
            if age < 18:
                bill = price["child"]
                print(f"The price for child ride is {bill}$")
            else:
                bill = price['adult']
                print(f"The price for adult ride is {bill}$")

            #* Ask for Photo
            while True:
                photo = input(f"Would you like to have a photo, it costs {photo_price}$? (yes/no)\n").lower()
                if photo in ["yes", "no"]:
                    break
                print("Invalid input, please enter 'yes' or 'no'")

            #* Calculate total bill
            if photo == "yes":
                bill += photo_price
            print(f"your total bill is {bill}$")


if __name__== "__main__":
    main()