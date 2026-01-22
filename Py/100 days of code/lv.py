# love calculator

your_name = input("input your name: ").lower()
their_name = input("input their name: ").lower()

combined_name = your_name + their_name

true_calc = sum(combined_name.count(c) for c in "true")
love_calc = sum(combined_name.count(c) for c in "love")

love_score = int(str(true_calc) + str(love_calc))

if 10 >= love_score > 90:
    print(f"your love score is {love_score}, horrible together")
elif 40 <= love_score < 70:
    print(f"your love score is {love_score}, not bad together")
else:
    print(f"your love score is {love_score}, great together")
