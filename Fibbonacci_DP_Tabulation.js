function fibDPTabulation(n){
    
    let table = [0,1,1];
    for(let i = 3; i<= n ; i++){
        table[i] = table[i-1] + table[i-2];
    }
    return table[n];
}