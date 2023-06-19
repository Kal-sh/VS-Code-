'''
print('Welcome to pizza delivery')

size = input('what size do you want? S, M or L\n')
addPepperoni = input('\nDo you want Pepperoni? Y or N\n')
extraCheese = input('\nDo you want extra Cheese? Y or N\n')
bill = 0

if size == 'S':
    bill+15
elif size == 'M':
    bill += 20
elif size == 'L':
    bill += 25

if addPepperoni == 'Y':
    if size == 'S':
        bill += 2
    else:
        bill += 3

if extraCheese == 'Y':
    bill += 1


print(f'Your pizza is gonna be {size} with the total bill of {bill}$')
'''
