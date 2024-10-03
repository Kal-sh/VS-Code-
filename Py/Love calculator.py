
#! Love calculator
print("Welcome to love calculator!\n")

name1 = input("What is your full name? \n").lower()
name2 = input("What is their full name? \n").lower()
combined_string = name1+name2

true_count = sum(combined_string.count(c) for c in 'true')
love_count = sum(combined_string.count(c) for c in 'love')

love_score = int(str(true_count) + str(love_count))


if 10 >= love_score >  90:
    print(f"Your love score is {love_score}, you go together like coke and mentos") #cspell:ignore mentos
elif 40 <= love_score <= 50:
    print(f"Your love score is {love_score}, you are alright together")
else:
    print(f"Your love score is {love_score}%")


"""
t = combined_string.count('t')
r = combined_string.count('r')
u = combined_string.count('u')
e = combined_string.count('e')

true = t+r+u+e

l = combined_string.count('l')
o = combined_string.count('o')
v = combined_string.count('v')
e = combined_string.count('e')

love = l+o+v+e

love_score = str(true) + str(love)

print(f'your are {love_score}%')
"""