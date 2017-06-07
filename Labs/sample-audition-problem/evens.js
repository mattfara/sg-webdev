


function clearErrors(){
    for (var loopCounter = 0;
    loopCounter < document.forms["userNums"].elements.length;
    loopCounter++) {
        if (document.forms["userNums"].elements[loopCounter]
            .parentElement.className.indexOf("has-") != -1){

            document.forms["userNums"].elements[loopCounter]
            .parentElement.className = "form-group";
            resetForm();
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["userNums"]["startNum"].value="";
    document.forms["userNums"]["endNum"].value="";
    document.forms["userNums"]["stepNum"].value="";
    document.getElementById("result").style.display="block";
    document.getElementById("output").style.display = "none";
    document.getElementById("resetButton").style.display = "none";
    document.forms["userNums"]["startNum"].focus();

}

function validateItems () {
    clearErrors();
//collect user info in variables
    var start = parseInt(document.getElementById("startNum").value, 10);
    var end = parseInt(document.getElementById("endNum").value, 10);
    var step = parseInt(document.getElementById("stepNum").value, 10);
    var evenArray = new Array();    
    var testNum=start;

//catch errors
    if (isNaN(step) || isNaN(start) || isNaN(end) || start==="" || end==="" || step==="" || start>end || step<=0){
        alert("There is an error in your input. Ensure that all inputs are numeric, that the start value is smaller than the end value, and that the step is larger than zero but smaller than your end number");
        document.forms["userNums"]["startNum"]
           .parentElement.className = "form-group has-error";
        document.forms["userNums"]["startNum"].focus();
        resetForm();
        return false;
    }

//populate array with evens in range -- maybe use a while loop instead?
    
    while (testNum <= end){
        
      if ((testNum % 2) === 0){
          
          evenArray.push(testNum)
         }   
      testNum = testNum + step
      
    }
    //show the sentence to the user
    //show the list of even numbers to user
    document.getElementById("output").style.display = "block";   
    document.getElementById("evens").innerText=evenArray.toString();        
    document.getElementById("firstNum").innerText = start;
    document.getElementById("secondNum").innerText = end;
    document.getElementById("showStep").innerText = step;
    document.getElementById("result").style.display="none";
    document.getElementById("resetButton").style.display = "block";    
    document.getElementById("resetButton").focus();
    



    //last line
    return false;
} 


    
    





    
    
    //could a for-loop do something like?
    //for (loopCounter=0; loopCounter<evens.length; loopCounter++){
        // document.getElementById("result").innerText+=evens[loopCounter];
        //}
    //for (loopCounter=0; loopCounter<evens.length; loopCounter++){
      //  document.getElementById("result").innerText+=evens[loopCounter];
        //}
    