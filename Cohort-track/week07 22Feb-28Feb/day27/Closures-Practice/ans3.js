function createMultiplier(factor){
    return function(num){
        return num * factor
    }
}

//test
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15