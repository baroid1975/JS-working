
const change = document.querySelector('#change');

var lightStates = {red:0,amber:1,green:2};
var currentState = lightStates.red;

change.addEventListener('click', changeState);

function changeState()

{
    clear();
  switch(currentState)
  {
    case lightStates.red:
    {
      document.querySelector("#green").className ="light green";
      currentState =  lightStates.amber;
    }
    break;
    case lightStates.amber:
    {
      document.querySelector("#amber").className ="light amber";
      currentState = lightStates.green;
    } break;
     case lightStates.green:
    {
      document.querySelector("#red").className ="light red";
      currentState = lightStates.red;
    } break;
   }
}

function clear(){
  document.querySelector("#green").className ="light off";
  document.querySelector("#amber").className ="light off";
  document.querySelector("#red").className ="light off";
}

