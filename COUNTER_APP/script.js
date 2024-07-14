let countValue = document.querySelector('#counter');  //counter ki value nikaal li 

//function to increment the value
const increment = () => {
    //get the value from UI
    let value = parseInt(countValue.innerText);  //parseInt is used to convert string numeric value to int value
    //countValue.innerText is used to fetch value from the UI and then send it to the value variable
    
    //update the value
    value = value + 1;

    //set the value onto the UI
    countValue.innerText = value;

};

//function to decrement the value
const decrement = () => {
    //get the value from UI
    let value = parseInt(countValue.innerText); 
    
    //update the value
    value = value - 1;
    
    //set the value onto the UI
    countValue.innerText = value;
};