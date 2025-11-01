import random
import string

messages = {
    'input_prompt': 'Enter desired password length (minimum 4): ',
    'length_error': 'Password length must be at least 4.',
    'generated_password': 'Generated password: ',
}

def handlePasswordGeneratoion(length):
    if length < 4:
        print(messages['length_error'])
        return None

    allChars = string.ascii_letters + string.digits + string.punctuation
    password = [
        random.choice(string.ascii_lowercase),
        random.choice(string.ascii_uppercase),
        random.choice(string.digits),
        random.choice(string.punctuation),
    ]
    #print(password)
    password += random.choices(allChars, k=length - 4)
    #print(password)
    random.shuffle(password)
    #print(password)

    return ''.join(password)

while True:
    try:
        userInput = int(input(messages['input_prompt']))
        password = handlePasswordGeneratoion(userInput)
        if password:
            print(messages['generated_password'] + password)
            break
    except ValueError:
        print(messages['length_error'])