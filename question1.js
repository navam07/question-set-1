function suma(N){
    let sum = 0;
    for (let i = 2; i <= N; i += 2)
    {sum += i;
    }
    return sum;
}
 console.log(suma(10));