// signature : array[3] n : number of elements to show
function tribonacci(signature,n){
    if (n <= 3) {
        for (let i = 0; i < (3 - n); i++) {
            signature.pop()
        }
    } else {
        for (let i = 2; i < n; i++) {
            signature.push(signature[i] + signature[i - 1] + signature[i - 2])
        }
    } 
    return signature
}
