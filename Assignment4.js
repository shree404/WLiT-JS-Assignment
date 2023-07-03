var temp; //  It shows Variable declaration of temp

function display() {
  //function display is created
  var temp; //It shows  Variable declaration inside the function

  console.log(temp); // At this point, the value of temp is still undefined
  temp = "bye"; //  the value of temp is assigned to 'bye' and initilized
}

temp = "hi"; // the value of temp is assigned to 'hi' and initilized

display(); //we call display Function

//output
undefined;
