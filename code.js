let raceNumber = Math.floor(Math.random() * 1000);
let reg_early=true
let age=33
if (age>18 && reg_early===true){
  raceNumber+=1000
  console.log('Race at 9:30am. Your race number is '+raceNumber)
}else if(age>18 && reg_early!==false){
  console.log('Race at 11:00am. Your race number is '+raceNumber)
}else if(age<18) { 
  console.log('Race at 12:30pm. Your race number is '+raceNumber)
}else{
  console.log('See the registration desk')
}
