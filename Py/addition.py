
#! Take in 2 numbers and add the first and last digit

firstNum = input('Input First Number:\n')
secondNum = input('Input Second Number:\n')
result = firstNum+secondNum
print(f'the result is {result}')
# strResult=str(result)
srtOne = int(result[0])
print(f'first number is {srtOne}')
srtTwo = int(result[-1])
print(f'second number is {srtTwo}')
finalResult = srtOne+srtTwo
print(finalResult)
