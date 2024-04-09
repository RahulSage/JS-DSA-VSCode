// // fib(4) // 3
// // fib(10) // 55
// // fib(28) // 317811
// // fib(35) // 9227465

// function fib(num){
//   // add whatever parameters you deem necessary - good luck!  

//   let nthNum ;
//   let first = 1;
//   let second = 1;
//   let count = 2;

//     function fibHelper(first,second,count){
        
//         if(count >= num) return second;
        
//         let sum = first + second;
//         return fibHelper(second,sum,++count);
//     }

//     return fibHelper(first,second,count);
// }

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}