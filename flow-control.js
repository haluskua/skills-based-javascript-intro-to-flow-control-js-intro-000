function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
  return 'You are a teenager!'}
  }
  
function teenager(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}


function ageChecker(age) {
  // don't forget to state the parameter for each age declaration
  if (age >=13 && age <= 19) {
    return 'You are a teenager!';
  } else if (age <=12) {
      return 'You are a kid';
    } else {
        return 'You are a grownup';
    }
}

// not too sure here,, wondering how the 'if' statement is missing
function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager"
}

// Switch statement
function switchAge(age) {
  switch(shr) {
    case 13:
      return "Dance to Pharrell's 'Happy'"
    default:
      return "I don't recognize that mood."
  }
 
  console.log("Let us know how you're feeling tomorrow!")
}