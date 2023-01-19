var binary = 1001;
var decimal = 0;
var weight = 1;
while(binary != 0){
   var remainder = parseInt(binary % 10);
   decimal = parseInt(decimal + (remainder * weight));
   binary = parseInt(binary / 10);
   weight = parseInt(weight * 2);
}
 console.log(decimal)