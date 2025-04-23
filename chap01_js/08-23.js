var string = 'hello world';
var search = 'l';
var count = 0; // 찾은 횟수를 저장할 변수

// 문자열은 유사 배열이므로 for문으로 순회할 수 있다.
/*
유사배열
문자열은 배열처럼 인덱스로 접근할 수 있다. 실제 배열은 아니지만 배열처럼 생겨서 유사배열이라한다.
그래서 for문으로 한글자씩 돌 수 있다.*/

for(var i=0; i<string.length; i++){
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  if(string[i] !== search) continue; //string[i]로 문자 하나하나 확인함. 'l'이 아니면 카운트 건너뜀
  count++; //continue문이 실행되면 이 문은 실행되지 않는다.
}
// 찾은 경우에만 카운트를 증가시킴
console.log(count); //3


//String.prototype.math 메서드로 동작 가능
// 정규표현식(Regex)을 이용한 방법 
// search : 정규표현식으로 만들어서 문자열 안에서 전부 검색
//'g' 플래그는 전역 검색 (전체에서 찾기)
const regexp = new RegExp(search, 'g');

// match()는 배열로 결과를 반환함 → 배열 길이가 곧 갯수
// .match() : 일치하는 것들을 배열로 반환
// length로 몇 개인지 알 수 있음
console.log(string.match(regexp).length); //3

