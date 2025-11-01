import random

scores = [0, 0]  # [player, computer]
choices = ['rock', 'paper', 'scissors']
messages = {
    'input_prompt': 'Enter rock, paper, or scissors to play against the Computer: '
}

def getComputerChoice():
    return random.choice(choices)

def determineWinner(playerChoice, computerChoice):
    if playerChoice == computerChoice:
        return 'tie'
    elif (playerChoice == 'rock' and computerChoice == 'scissors') or \
         (playerChoice == 'scissors' and computerChoice == 'paper') or \
         (playerChoice == 'paper' and computerChoice == 'rock'):
        return 'Player Wins!'
    else:
        return 'Computer Wins!'

def definePlayerInput():
    while True:
        playerInput = input(messages['input_prompt']).lower()
        if playerInput in ('stop', '/stop'):
            break
        elif playerInput in ('score', '/score'):
            print(f"Player: {scores[0]}\nComputer: {scores[1]}")
        elif playerInput in choices:
            computerChoice = getComputerChoice()
            winner = determineWinner(playerInput, computerChoice)
        else:
            print("Invalid input. Please enter rock, paper, or scissors.")

definePlayerInput()