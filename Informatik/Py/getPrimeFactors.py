import math

num = int(input('Enter a number to get its Prime Factors: '))
factors = getPrimeFactors(num)
print(f"Prime factors of {num} are: {factors}")

def getPrimeList(n):
    primes = []
    for num in range(2, int(math.isqrt(n)) + 1):
        is_prime = True
        for p in primes:
            if num % p == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(num)
    return primes

def getPrimeFactors(num):
    primeList = getPrimeList(num)
    numPrimeFactors = []
    primeIndex = 0

    while num > 1 and primeIndex < len(primeList):
        currentPrime = primeList[primeIndex]
        if num % currentPrime == 0:
            numPrimeFactors.append(currentPrime)
            num //= currentPrime
        else:
            primeIndex += 1

    if num > 1:
        numPrimeFactors.append(num)

    return numPrimeFactors

