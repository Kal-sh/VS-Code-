# BMI calulator
height = float(input('enter your height in m: '))
weight = int(input('enter your weight in kg: '))

bmi = round(weight/height**2)


if bmi < 18.5:
    print(f"underweight {bmi}")
elif 18.5 <= bmi < 25:
    print(f"normal weight {bmi}")
elif 25 <= bmi < 30:
    print(f"overweight {bmi}")
elif 30 <= bmi < 35:
    print(f"obese {bmi}")
else:
    print(f'clinically obese {bmi}')
