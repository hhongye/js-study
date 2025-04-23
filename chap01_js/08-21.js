//outer라는 식별자가 붙은 레이블 for문
outer: for(var i=0; i<3; i++){ //0부터 3이하까지 증감 
  for(var j=0; j<3; j++){ //0부터 3이하까지 증감
    if(i+j ===3) break outer; //합이 3일때 중단
    console.log(`inner [${i}, ${j}]`); //출력
  }
}
console.log('Done!');