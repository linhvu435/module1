let number = parseInt(prompt("Enter the number"))
let sum = 0;
function sumOfListPrime(n) {
    let check = true
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                check = false;
            }
        }
        if (check == true) {
            sum += i;
        }
        check = true
    }
    return sum
}