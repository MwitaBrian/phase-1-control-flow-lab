function scuberGreetingForFeet(distance){
  // Write your code here!
  let greeting;
  if (distance > 2500) {
    greeting = 'No can do.';
  } else if (distance > 2000) {
    greeting = 'I will gladly take your thirty bucks.'
  } else if (distance <= 400) {
    greeting = 'This one is on me!';
  }
  return greeting;
}

function ternaryCheckCity(destination){
  // Write your code here!
  const response = destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return response;
}

function switchOnCharmFromTip(charm){
  // Write your code here
  switch(charm) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }

}