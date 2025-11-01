scores = [0, 0]  # [player, computer]
import random
choices = ['rock', 'paper', 'scissors']
def getComputerChoice():
    return random.choice(choices)

def determineWinner(playerChoice, computerChoice):
    if playerChoice == computerChoice:
        return 'tie'
    elif (playerChoice == 'rock' and computerChoice == 'scissors') or (playerChoice == 'scissors' and computerChoice == 'paper') or (playerChoice == 'paper' and computerChoice == 'rock'):
        return 'Player Wins!'
    else:
        return 'Computer Wins!'

#def definePlayerInput()
#    playerInput = 
print(determineWinner(input('Enter ...:'), getComputerChoice()))