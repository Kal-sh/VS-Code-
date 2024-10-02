
#! Pizza Delivery

print('Welcome to Pizza house delivery!\n')

size = input('what size pizza do you want? S, M or L\n').capitalize()
add_pepperoni = input('\nDo you want Pepperoni? Y or N\n').capitalize()
extra_cheese = input('\nDo you want extra Cheese? Y or N\n').capitalize()
bill = 0

if size == 'S':
    bill += 15
elif size == 'M':
    bill += 20
elif size == 'L':
    bill += 25

if add_pepperoni == 'Y':
    if size == 'S':
        bill += 2
    else:
        bill += 3

if extra_cheese == 'Y':
    bill += 1

print(f'your is gonna be {size} and total bill is gonna be {bill}')
