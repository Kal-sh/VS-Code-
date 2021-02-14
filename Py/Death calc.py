
#! Death Calculator

age = int(input('how old are you? '))
remaningYear = 90-age
daysRemaining = remaningYear*365
monthRemaining = remaningYear*12
weeksRemaining = remaningYear*52

print(
    f'you have {daysRemaining} days, {weeksRemaining} weeks and {remaningYear} years left to Live.')
