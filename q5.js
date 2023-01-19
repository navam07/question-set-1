function computeSumOrProduct(n, c) {
    let result = 0;
    if (c === 1) {
        for (let i = 1; i <= n; i++) {
            result += i;
        }}
else if (c === 2){
    result = 1;
    for (let i = 1; i <= n; i++){
        result *= i;
    }
}
console.log(result)}
computeSumOrProduct(10, 2);