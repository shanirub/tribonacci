// signature : array[3] n : number of elements to show
function tribonacci(signature,n){
    //your code here

    if (n <= 3) {
        for (let i = n; i > 0; i--) {
            signature.pop
        }
    } else {
        for (let i = 2; i < n; i++) {
            signature.push(signature[i] + signature[i - 1] + signature[i - 2])
        }
    }
    
    return signature
    
  }