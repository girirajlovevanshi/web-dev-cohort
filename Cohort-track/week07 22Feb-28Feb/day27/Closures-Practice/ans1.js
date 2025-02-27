function createCounter() {
    let count = 0;
    return {
        increment : function () {
            count++
            console.log(count);
            
        },
        decrement : function () {
            count--
            console.log(count);
            
        },
        getCount : function () {
            //console.log(count); 
            return count; // Now it returns the count instead of logging
            
        }
    }
}

//test case
const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.getCount()); // 1