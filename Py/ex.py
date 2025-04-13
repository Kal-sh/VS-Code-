import random

# cSpell:disable
"""
#* Heads or tails game
random_num = random.randint(0,1)

if  random_num == 0:
    print("Heads")
else:
    print("Tails")
"""


# * extend function
states_of_america = [
    "Delaware",
    "Pennsylvania",
    "New Jersey",
    "Georgia",
    "Connecticut",
    "Massachusetts",
    "Maryland",
    "South Carolina",
    "New Hampshire",
    "Virginia",
    "New York",
    "North Carolina",
    "Rhode Island",
    "Vermont",
    "Kentucky",
    "Tennessee",
    "Ohio",
    "Louisiana",
    "Indiana",
    "Mississippi",
    "Illinois",
    "Alabama",
    "Maine",
    "Missouri",
    "Arkansas",
    "Michigan",
    "Florida",
    "Texas",
    "Iowa",
    "Wisconsin",
    "California",
    "Minnesota",
    "Oregon",
    "Kansas",
    "West Virginia",
    "Nevada",
    "Nebraska",
    "Colorado",
    "North Dakota",
    "South Dakota",
    "Montana",
    "Washington",
    "Idaho",
    "Wyoming",
    "Utah",
    "Oklahoma",
    "New Mexico",
    "Arizona",
    "Alaska",
    "Hawaii",
]

states_of_america.extend(["Angela land", "fuck ya land"])

print(len(states_of_america))


"""
#* reverse a list
b=['a', 'A', 'b', 'B']
a = ['mola', 'chaLtu', 'mulatu']

for i in range(len(a) -1, -1, -1):
    print(a[i])
    #b.append(a[i])


# a.sort(reverse=True)

b.sort(key=str.lower)

"""


names = input("Give me everybody's name separate by comma.\n")
name_list = names.split(",")
"""
#* who will pay game using python random generator
# print(name_list)

num_items = len(name_list)

# the reason we subtract one from num_items is cuz len() starts counting from one and py starts to count from 0
rand_choice = random.randint(0, num_items - 1)
person_paying = name_list[rand_choice]
"""
# * using the choice() method
person_paying = random.choice(name_list)
print(f"{person_paying} pays")
