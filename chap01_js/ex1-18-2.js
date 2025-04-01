// if-else if문으로 바꿔라

const isLogin = true;
const isUser = true;
const isSeller = false;
const isAdmin = false;

if(isLogin == true){
  console.log('로그인 상태')
} else {
  console.log('로그아웃 상태')
}

//console.log((0.1 + 0.2).toFixed(2));

// isUser가 true이면 "사용자" 출력
if(isUser){
  console.log('사용자')
} else {
  if (isSeller){ // isSeller가 true이면 "판매자" 출력
    console.log('판매자')
  } else { // isAdmin "관리자" 출력
    console.log('관리자')
  }
}