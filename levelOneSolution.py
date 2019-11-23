import math

inputValue = int(input('Enter change due: '))

outputString = ''


def evaluate(amountToEvaluate, valueToEvaluate, changeText):
    'Function to evaluate the change'
    inInput = math.floor(amountToEvaluate / valueToEvaluate)
    outputString = str(inInput) + " " + changeText
    if inInput > 1:
        outputString += "s"
    return outputString


if inputValue >= 100000:
    outputString += evaluate(inputValue, 100000, "hundred thousand note")
    inputValue = inputValue % 100000
if inputValue >= 10000:
    outputString += evaluate(inputValue, 10000, "ten thousand note")
    inputValue = inputValue % 10000
if inputValue >= 1000:
    outputString += evaluate(inputValue, 1000, "thousand note")
    inputValue = inputValue % 1000
if inputValue >= 100:
    outputString += " " + evaluate(inputValue, 100, "hundred note")
    inputValue = inputValue % 100
if inputValue >= 50:
    outputString += " " + evaluate(inputValue, 50, "fifty note")
    inputValue = inputValue % 50
if inputValue >= 10:
    outputString += " " + evaluate(inputValue, 10, "ten coin")
    inputValue = inputValue % 10
if inputValue > 0:
    outputString += " " + evaluate(inputValue, 1, "coin")
print(outputString)
