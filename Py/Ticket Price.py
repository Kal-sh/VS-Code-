
#! Ticket office

height = int(input('what is your height in cm? \n'))
age = int(input('\nhow old are you? \n'))
photo = input('\ndo you want a photo, yes or no? \n')
bill = 0

if height > 120:
    print('congra, you can ride')
    if age < 12:
        bill = 5
    elif age >= 12 | age < 18:
        bill = 7
    elif age >= 18:
        bill = 12

    if photo == 'yes':
        print(
            f'your ticket {bill}$ and additional 3$ for photo, your total bill is gonna be {bill+3}$')
    else:
        print(f'your ticket price is gonna be {bill}$')
else:
    print('go home shorty')
