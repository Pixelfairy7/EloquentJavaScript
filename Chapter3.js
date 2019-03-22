//Minimum 
//Write a function min that takes 2 arguments and returns their minimum 

function min(a,b){
  if(a < b){
    console.log(`${a} is smaller than ${b}`)
  } else if (a == b){
    console.log('The values are equal')
  } else {
    console.log(`${b} is smaller than ${a}`)
  }
}

min(2,10);
min(54746,8);
min(3,3);
