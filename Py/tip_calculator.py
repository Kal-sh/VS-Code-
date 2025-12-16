# tip calculator

print('Welcome to the tip calculator.')

totol_bill = input('what was the total bill? ')
tip_percent = input('what percentage top would you lie to give? ')
total_ppl = input('How many people to split the bill? ')

individial_bill = float(totol_bill)/int(total_ppl)*(1+int(tip_percent)/100)

final_amount = round(individial_bill)
final_amount = '{:.2f}'.format(individial_bill)
print(f'Each person should pay: ${final_amount}')
