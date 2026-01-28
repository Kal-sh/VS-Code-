'''
def hello(to="world"):
    print('hello,', to)


def main():
    name = input("what is your name? ")
    hello(name)


main()
'''


def main():
    val = float(input("input x "))
    print("x square is,", calc(val))


def calc(n):
    return pow(n, 2)


main()
