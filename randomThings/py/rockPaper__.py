scores = [0, 0]  # [player, computer]
import random
choices = ['rock', 'paper', 'scissors']
messages = {
    'input_prompt': 'Enter rock or paper or scissors to play against the Computer:'
}
def getComputerChoice():
    return random.choice(choices)

def determineWinner(playerChoice, computerChoice):
    if playerChoice == computerChoice:
        return 'tie'
    elif (playerChoice == 'rock' and computerChoice == 'scissors') or (playerChoice == 'scissors' and computerChoice == 'paper') or (playerChoice == 'paper' and computerChoice == 'rock'):
        return 'Player Wins!'
    else:
        return 'Computer Wins!'

def definePlayerInput():
    playerInput = input(messages['input_prompt']).lower()

print(determineWinner(input(messages['input_prompt']), getComputerChoice()))