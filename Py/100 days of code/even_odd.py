# Even or odd
number = int(input('input a number to check if its even or odd: '))

check = number % 2
if check == 0:
    print(f'its even {check}')
else:
    print(f'its odd {check}')
