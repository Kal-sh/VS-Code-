# Average height
height_sum = 0
num_stud = 0
student_heights = input(
    "input height of students separated by comma: ").split()

for i in range(0, len(student_heights)):
    student_heights[i] = int(student_heights[i])

for i in student_heights:
    height_sum += i

for i in student_heights:
    num_stud += 1

avg_height = height_sum/num_stud

print(f"the average height of the students is {avg_height:.2f}")
