import random

scores = [0, 0, 0]
choices = ['rock', 'paper', 'scissors']
messages = {
    'input_prompt': 'Enter rock, paper, or scissors to play against the '
    'Computer: ',
    'invalid_input': "Invalid input. Please type 'rock', 'paper', or "
    "'scissors'.",
    'help': "Type 'rock', 'paper', or 'scissors' to play.\nType 'score' to see the current score.\nType 'stop' to end the game.",
}


def getComputerChoice():
    return random.choice(choices)


def determineWinner(playerChoice, computerChoice):
    if playerChoice == computerChoice:
        scores[2] += 1
        return 'tie'
    elif (playerChoice == 'rock' and computerChoice == 'scissors') or \
         (playerChoice == 'scissors' and computerChoice == 'paper') or \
         (playerChoice == 'paper' and computerChoice == 'rock'):
        scores[0] += 1
        return 'Player Wins!'
    else:
        scores[1] += 1
        return 'Computer Wins!'


def handlePlayerInput(playerInput):
    playerInput = playerInput.lower()
    if playerInput in ('score', '/score'):
        print(f"Player: {scores[0]}\nComputer: {scores[1]}\nTies: {scores[2]}")
    elif playerInput in ('help', '/help'):
        print(messages['help'])
    elif playerInput in choices:
        computerChoice = getComputerChoice()
        print(determineWinner(playerInput, computerChoice))
    elif playerInput not in ('stop', '/stop'):
        print(messages['invalid_input'])
    return playerInput


while True:
    playerInput = handlePlayerInput(input(messages['input_prompt']))
    if playerInput in ('stop', '/stop'):
        break