function scuberGreetingForFeet(rideFeet){
  let result
 if( rideFeet<= 400)
 {
   return result='This one is on me!';
   
 }
 else if(rideFeet>2000 && rideFeet<2500){
  
   return result='I will gladly take your thirty bucks.';
 }
 else if(rideFeet>2500){
   
   return result="No can do."
 }
}

function ternaryCheckCity(city){
 let outcome;
 if (city=="NYC"){
  return "Ok, sounds good."
 }
 else{
  return 'No go.'
 }

}

function switchOnCharmFromTip(tip){
//  let tip = 'generous';

let feedback;

switch (tip) {
   case 'generous':
       return feedback = "Thank you so much.";
       break;
   case 'not as generous':
       return feedback = "Thank you.";
       break;
   default:
       return  feedback="Bye."
}


}