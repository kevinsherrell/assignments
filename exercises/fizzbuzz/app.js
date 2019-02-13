let fizzBuzz = []
for (let i = 0; i < 100; i++) {
    if(i % 3 === 0 && i%5 === 0){
        fizzBuzz[i] = "fizzBuzz"
    }
    else if (i % 3 === 0) {
        fizzBuzz[i] = "fizz"
    }else if(i % 5 === 0){
        fizzBuzz[i] = "Buzz"
    }else{
        fizzBuzz[i] = i
    }
}
console.log(fizzBuzz)