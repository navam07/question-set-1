function evenOdd(n) {
    var evenNo = 0;
    var oddNo = 0;
    var remainder = 0;
    while (n > 0) {
         remainder = n % 10;
        if (remainder % 2 == 0) {
            evenNo += remainder;
        } else {
            oddNo += remainder;
        }
        n = parseInt(n / 10);}
        console.log(oddNo);
        console.log(evenNo);
}
  evenOdd(1225);

