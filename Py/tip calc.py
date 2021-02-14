bill = float(input('What was the Total Bill? '))
tip = int(input('What percentage tip would you like to give? 10, 12 or 15? '))
numPpl = int(input('How many ppl to split the bill? '))


if tip != (10 | 12 | 15):
    print('please choose from the mentioned amount of tip.')
else:
    totalTip = bill * (tip / 100)
    totalBill = bill + totalTip
    indvBill = totalBill / numPpl
    print(f'Your Bill will be {bill}$ with {tip}% tip {totalBill}$')
    print(f'Individually {round(indvBill, 2)}$')
