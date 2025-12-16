# BMI calulator
height = input('enter your height in m: ')
weight = input('enter your weight in kg: ')

bmi = int(weight)/(float(height)**2)

bmi = round(bmi)

if bmi < 18.5:
    print(f"underweight {bmi}")
elif 18.5 < bmi <= 25:
    print(f"normal weight {bmi}")
elif 25 < bmi <= 30:
    print(f"overweight {bmi}")
elif 30 < bmi < 35:
    print(f"obese {bmi}")
else:
    print(f'clinically obese {bmi}')
