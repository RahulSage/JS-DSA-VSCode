function fibDynamic(n,savedSolutions = []){
    if(savedSolutions[n]) return savedSolutions[n]
    if (n <= 2) return 1;
    var result =  (fibDynamic(n-1 , savedSolutions) + fibDynamic(n-2, savedSolutions));
    savedSolutions[n] = result;
    return result;
}