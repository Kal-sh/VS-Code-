
#! Pizza Delivery

print('Welcome to Pizza house delivery!\n')

size = input('what size pizza do you want? S, M or L\n')
addPapperoni = input('\nDo you want Papperoni? Y or N\n')
extraCheese = input('\nDo you want extra Cheese? Y or N\n')
bill = 0

if size == 'S':
    bill += 15
elif size == 'M':
    bill += 20
elif size == 'L':
    bill += 25

if addPapperoni == 'Y':
    if size == 'S':
        bill += 2
    else:
        bill += 3

if extraCheese == 'Y':
    bill += 1

print(f'your is gonna be {size} and total bill is gonna be {bill}')
