var katzDeliLine = [];

function takeANumber(line, person){
  line.push(person)
  return 'Welcome, ' + person + '. You are number ' + line.length + ' in line.'
}

function nowServing(line){
  if (line.length === 0){
    return 'There is nobody waiting to be served!'
  }else{
    var name = line [0];
    line.slice(0, 1);
    return "Currently serving " + name + ".";
  }
}
function currentLine(x){
  var line = []
  if (x.length === 0){
    return 'The line is currently empty.'
  }else {
    for(var i = 0; i < x.length; i++){
      line += (i + 1) + '. ' + x[i] + ', '
    }
    line = line.slice(0, line.length-2)
      return "The line is currently: " + line
  }
}