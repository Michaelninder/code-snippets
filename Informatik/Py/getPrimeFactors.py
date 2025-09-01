import math

num = int(input('Enter a number to get its Prime Factors: '))
factors = getPrimeFactors(num)
print(f"Prime factors of {num} are: {factors}")

def getPrimeList(n):
    # Erzeugt eine Liste aller Primzahlen kleiner oder gleich worzel(n).
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
    # Gibt die Primfaktoren von num als Liste zurück.
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

    # Falls nach der Teilung noch ein Rest übrig ist, ist dieser selbst eine Primzahl
    if num > 1:
        numPrimeFactors.append(num)

    return numPrimeFactors

