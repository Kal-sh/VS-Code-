# heigh score

grades = input("input list of student grades separated by space: ").split()

for i in range(0, len(grades)):
    grades[i] = int(grades[i])

high_score = 0
for n in grades:
    if n > high_score:
        high_score = n
print(high_score)
