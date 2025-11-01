tries = 0
guessed = False

import random

numberToGuess = random.randint(1, 100)

def tryNumberInput(numberString):
    global numberToGuess
    global tries
    global guessed
    tries += 1
    try:
        guessedNumber = int(numberString)
        if guessedNumber < numberToGuess:
            print("Too low!")
        elif guessedNumber > numberToGuess:
            print("Too high!")
        else:
            print("Correct! You guessed the number.")
            guessed = True
            return True
    except ValueError:
        print("Please enter a valid integer.")
    return False

while not guessed:
    userInput = input("Guess a number between 1 and 100: ")
    tryNumberInput(userInput)