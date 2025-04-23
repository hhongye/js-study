var string = 'hello world';
var search = 'l';
var index;

//문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for(var i = 0; i<string.length; i++){ //0부터 문자열 길이까지 증감
  //문자열의 개별 문자가 'l'이면
  if(string[i] === search){ //l
    index = i;
    break; //반복문 탈출
  }
}
console.log(index); //2

//참고로 String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search)); //2