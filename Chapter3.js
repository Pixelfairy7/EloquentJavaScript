//Minimum 
//Write a function min that takes 2 arguments and //returns their minimum 

function min(a,b){
  if(a < b){
    console.log(`${a} is smaller than ${b}`)
  } else if (b < a ){
    console.log(`${b} is smaller than ${a}`)
  } else {
    console.log('The values are equal')
  }
}

min(2,10);//2 is smaller than 10
min(54746,8); //8 is smaller than 54746
min(3,3); //The values are equal
