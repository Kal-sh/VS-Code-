# tip calculator
print("Welcome to the tip calculator")


def main():
    total_bill = float(input("what was the total bill? "))
    num_ppl = int(input("how many ppl to split the bill? "))
    tip = int(input("what percentage tip would you like to give? "))
    amount_per_person = calc(total_bill, num_ppl, tip)
    print(f"each person should pay ${amount_per_person:.2f}")


def calc(total_bill, num_ppl, tip):
    return (total_bill/num_ppl)*(1+tip/100)


if __name__ == "__main__":
    main()
