# random payer
import random

name_string = input("Give me everyone's name separated by comma. ")

names = name_string.split(", ")

rand_name = random.choice(names)

print(f"The one going to pay the bill is {rand_name}")
