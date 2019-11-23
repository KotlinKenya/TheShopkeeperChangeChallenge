import math

inputValue = int(input('Enter a value: '))

outputString = ''


def evaluate(amountToEvaluate, valueToEvaluate, singleNoteString, pluralNoteString):
    'Function to evaluate the change'
    inInput = math.floor(amountToEvaluate / valueToEvaluate)
    outputString = ""
    if inInput > 1:
        outputString = str(inInput) + " " + pluralNoteString
    else:
        outputString = str(inInput) + " " + singleNoteString

    return outputString

if inputValue >= 100000:
    outputString += evaluate(inputValue, 100000, "hundred thousand note", "hundred thousands notes")
    inputValue = inputValue % 100000
if inputValue >= 10000:
    outputString += evaluate(inputValue, 10000, "ten thousand note", "ten thousands notes")
    inputValue = inputValue % 10000
if inputValue >= 1000:
    outputString += evaluate(inputValue, 1000, "thousand note", "thousands notes")
    inputValue = inputValue % 1000
if inputValue >= 100:
    outputString += " " + evaluate(inputValue, 100, "hundred note", "hundreds notes")
    inputValue = inputValue % 100
if inputValue >= 50:
    outputString += " " + evaluate(inputValue, 50, "fifty note", "fifties notes")
    inputValue = inputValue % 50
if inputValue >= 10:
    outputString += " " + evaluate(inputValue, 10, "ten coin", "ten coins")
    inputValue = inputValue % 10
if inputValue > 0:
    outputString += " " + evaluate(inputValue, 1, "coin", "coins")
print(outputString)
