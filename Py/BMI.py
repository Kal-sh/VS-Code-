
#! BMI Calculator

height = float(input('What is your Height in m:\n'))
weight = float(input('What is your Weight in kg:\n'))

BMI = weight/(height**2)
print(type(BMI))
intBMI = int(BMI)
# print(f'Your BMI is {int(BMI)}')
if intBMI < 18.5:
    print(f'Your BMI is {intBMI}, your are skinny AF.')
elif intBMI > 25:
    print(f'Your BMI is {intBMI}, your are on your way to be a fattie.')
elif intBMI > 30:
    print(f'Your BMI is {intBMI}, your are a fattie.')
else:
    print(f'Your BMI is {intBMI}, your are fucked biggie.')