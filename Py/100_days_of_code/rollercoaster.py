# rollercoster

print("welcome")

height = float(input("how tall are you? "))
price = {'kids': 5, 'teen': 7, "adult": 12}
want_photo = {'y': 3, 'n': 0}
total_bill = 0

if height < 120:
    print("get out of here shorty")
else:
    print("you can ride the rollercoster")

    age = int(input("how old are you? "))

    if age < 12:
        total_bill = price["kids"]
    elif 12 <= age < 18:
        total_bill = price["teen"]
    else:
        total_bill = price["adult"]

    photo = input("do you want photo? y or n ")
    if photo == "y":
        total_bill += want_photo['y']

    print(f"your total bill is ${total_bill}")
