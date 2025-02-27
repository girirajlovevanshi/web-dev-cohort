function buttonClickHandler(buttonId, message) {
    const button = document.getElementById(buttonId);
    // if(!button){
    //     console.log(`Button with id: ${buttonId} not found`);   
    // }
    if (!button) {
        console.log(`Button with id: ${buttonId} not found`);
        return; // Stop execution if button is not found
    }
    button.addEventListener("click",function(){
        console.log(message);
        
    })
}

//test
buttonClickHandler("myButton", "Button clicked!");
// Clicking the button with id "myButton" from ans5.html log message okk "