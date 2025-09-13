<?php

function primeFactors($num): array {

    $primeList = [];
    $limit = floor(sqrt($num));
    for ($i = 2; $i <= $limit; $i++) {
        $isPrime = true;
        for ($j = 2; $j <= sqrt($i); $j++) {
            if ($i % $j == 0) {
                $isPrime = false;
                break;
            }
        }
        if ($isPrime) {
            $primeList[] = $i;
        }
    }

    $primeNumberIndex = 0;

    while ($num > 1 && $primeNumberIndex < count($primeList)) {
        $currentPrime = $primeList[$primeNumberIndex];
        if ($num % $currentPrime == 0) {
            $numPrimeFactors[] = $currentPrime;
            $num = $num / $currentPrime;
        } else {
            $primeNumberIndex++;
        }
    }

    if ($num > 1) {
        $numPrimeFactors[] = $num;
    }

    return $numPrimeFactors;
}

$num = 84;
$factors = primeFactors($num);
echo "Primfaktoren von $num: " . implode(", ", $factors);
