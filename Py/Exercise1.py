print('welcome to the tip calculator.')
total_bill=float(input('what is the total bill?'))
num_ppl=int(input('How many people to split the bill?'))
tip=int(input('What percentage tip would you like to give?'))/100
total_ammount=total_bill*(1+tip)
personal_bill=total_ammount/num_ppl
print(f'Each person should pay: {personal_bill:.2f}')
