var string = 'hello world';
var search = 'l';
var count = 0;

for(var i=0; i<string.length; i++){
  //'l'이면 카운트 증가
  if(string[i] === search) count++;
}
console.log(count); //3