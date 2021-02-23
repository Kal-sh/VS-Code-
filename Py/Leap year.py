
#! leap year calculator

yr = int(input('input year: '))
if yr % 4 == 0:
    if yr % 100 == 0:
        if yr % 400 == 0:
            print(f'the {yr} year is leap year')
        else:
            print('not leap year')
    else:
        print(f'{yr} is a leap year')
else:
    print('not a leap year')
