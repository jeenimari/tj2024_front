console.log('[2]안녕 JS')

//1.JS 출력관련 기능/함수
console.log('[3]console함수출력') // [개발자도구의 console 탭에 출력하는 함수 개중요함] 
//[2] alert 브라우저 상단에 알림창 에 메세지 출력하는 함수
alert('[4]alert함수 출력') //브라우저의 알람참에 내용 출력하는 함수
//[3] document.write(), 현재 HTML의 메세지를 출력하는 함수
document.write('[5]document.write 함수출력') //현재 html에 내용을 출력하는 함수
//[4] document.body.innerHTML
document.body.innerHTML='[6]document.body.innerHTML 속성출력';

//2.JS 입력관련 함수
// [1] confirm
confirm('[7]내용 입력:') // 브라우저에 알림 메세지 창 (확인=true , 취소 = flase)
//[2] prompt
prompt('[8]내용 입력 메세지 창') //브라우저 (메세지 입력)
//[3]document.querySelector('마크업명).innerHTML 
document.querySelector('body').innerHTML