<?php

function getPrimeFactrs(num): array {
    $factrs = [];
    for ($i = 0; $i < $num; $i++)
        $factrs[$i] = 0;
    return $factrs;
    