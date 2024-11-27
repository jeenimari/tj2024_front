/*
 HTML 마크업 이벤트 함수
    onClick : 지정한 마크업을 클릭했을 때 ~~ JS 코드를 연결시킬 수 있음

    <마크업 onClick="js함수명( )">
*/

//[1] func1 함수정의
function func1( ){
    console.log('func1 execute')
}

//[2] '등록함수'함수 정의 : 등록버튼 클릭시 input에 입력된 값을 배열에 저장하는 함수
let 이름명단 = [ ] //-- > 전역변수
function 등록함수( ){ // m strat
   //-DOM 객체 (document ) : HTML을 조작 가능한 객체
   /*document.querySelector(".클래스명")
   document.querySelector("#아이디명")
   document.querySelector("마크업명")
   document.querySelector(".클래스명>")
*/
   //1.html input 마크업에 입력된 (객체) js로 가져오기

   let input = document.querySelector('.nameInput')

   let data = input.value; // 2.
   console.log(data);

   //3. 'data' 변수의 값을  '이름명단' 전역변수 배열로 대입
   
   //4. 배열에 push 이후에 출력(새로고침)을 한다.
   이름명단.push(data);
} // f end
//[3] '출력함수' 함수 정의 : 배열이 (이름명단)의 변화가 있을 때 화면(HTML) 렌더링(새로고침)하는 함수
function 출력함수( ){
    //-배열순회 : 배열내 모든 요소들을 하나씩 호출
    let html = ``; // 출력할 HTML 구성할 변수를 선언
    for(let index=0;index<=이름명단.length;index++){
        //console.log(이름명단[index])
        html += `<div>${이름명단[index]}</div>` //출력할 HTML 변수에 배열내 데이터를 누적한다.
    }//for end
    console.log(html);
    //3 html 츨력,특정한 구역의 출력 , inner( ) :이너타이 안쪽이란뜻 <시작마크업>innerHTML</끝마크업>
    document.querySelector('.printbox').innerHTML = html
}//f end 