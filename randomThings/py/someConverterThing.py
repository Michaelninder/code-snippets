# input: "AAAABBCCCD" => output: "4A2B3C1D"

def createInput():
    return input("Enter a string: ")


def convertString(inputString):
    output = ''
    countr = 0
    nenner = ''

    while len(inputString) > 0:
        nenner = inputString[0]
        for char in inputString:
            if char == nenner:
                countr += 1
            else:
                break
        output += str(countr) + nenner
        inputString = inputString[countr:]
        countr = 0


convertString(createInput())