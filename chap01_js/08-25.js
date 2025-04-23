// continue 문을 사용하지 않으면 if문 내에 코드를 작성해야 한다.
var string = 'hello world';
var search = 'l';
var count = 0; // 찾은 횟수를 저장할 변수

for(var i=0; i<string.length; i++){
  // 'l'이면 카운트 증가함
  if(string[i] === search){
    count++;
  }
}
console.log(count);
// continue문을 사용하면 if문 밖에 코드를 작성할 수 있다.
for(var i = 0; i<string.length; i++){
  //'l'이 아니면 카운트를 증가시키지 않음
  if(string[i] !== search) continue;
  count++;
}
console.log(count);