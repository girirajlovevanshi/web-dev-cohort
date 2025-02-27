function delayedLogger(message, delay){
    setTimeout(function(){
        console.log(message); 
    },delay)
}

//test
delayedLogger("Hello, World!", 2000); // Logs "Hello, World!" after 2 seconds