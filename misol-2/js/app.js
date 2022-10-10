let a = 0;
function sumOfNegatives(number){
    for (let int = 0; int < number.length; ++int) {
    if (number[int] < 0) {
    a += number[int]
     }
}
    return a
}

console.log(sumOfNegatives([10, -9,3,-41]));
