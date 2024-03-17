//first class function
function abs(q){
q();
}


abs(function(){console.log(12)})