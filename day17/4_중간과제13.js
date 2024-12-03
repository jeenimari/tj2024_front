/*
주제 : TO dO LIST 구현하기  -할일 목록

개발 순서
    1.구현할 화면을 스케치(프로토타입) 작성
    2.구성한 화면을 HTML과 CSS로 샘플 작성하기.
    3.배열타입과 객체타입을 이용한 메모리 구성
        할일코드 ||   할일내용  || 할일상태
        1             수업듣기      true
        2              밥먹기       false

        -할일코드 : 할일내용과 할일상태는 중복이 존재하므로 식별자 역할 못한다.
            -식별자가 필요한 이유는 수정 또는 삭제시 수정/삭제할 대상이 식별되어야함.
        -할일상태 : 할일상태는 완료 true 또는 미완료 false로
            -true에 '완료'라는 의미를 부여해야함
                --->1. if 간소화 2.'완료'단어보다 true 리터럴이 메모리가 더 적음.
    -객체와 배열 샘플 구성 (표/테이블=배열, 가로/행1개= 객체1개)             
    
    4.js 기능/이벤트 구성 : 1필요한 함수 /기능 들을 파악 2.함수들이 실행되는 조건 3.각 함수들의 매개변수와/리턴값 파악
        1.등록함수: 실행조건 [등록]버튼 클릭시 onclick
        2.출력함수: 실행조건 js실행될 때 2.등록/수정/삭제가 성공했을 때
        3.수정함수: 실행조건 : [수정]버튼 클릭시 onclick
        4.삭제함수: 실행조건 : [삭제]버튼 클릭시 onclick
*/

let 할일목록=[
    {할일코드 : 1 , 할일내용 : "수업듣기",할일상태 : false},
    {할일코드 : 2 ,할일내용 : "밥먹기" , 할일상태 : ture}
]
let 식별번호 = 3;
//[2] 등록함수 매x 리 x
//1)HTML로부터 (할일내용) 입력받은 값(value)를 js 로 가져온다
//2)[처리] ---- > 배열에 저장 push
function 등록함수( ){ 
    let content = document.querySelector('.contentInput').value //[value호출]
    let 할일 = {
        할일코드 : 식별번호,  // '식별번호'변수값을 대입
        할일내용 : content,   // 입력받은 'content' 변수값을 대입
        할일상태 : false      // 초기값을 false(미완료) 대입
    }
    할일목록.push(할일); //생성한 객체를 배열에 저장/대입
    식별번호++;         //다음 할일이 등록할때 식별코드가 1씩 증가하기 위해서
    console.log(할일목록) // 테스트 확인
    // + 부가 코드
    alert('[할일 등록 했습니다]')
    document.querySelector('.contentInput').value=``;
    return;
}//  f end

//[3] 전체출력함수 매 x 리 x
function 전체출력함수( ){
    //어디에 ,todoBottom,
    let todoBottom = document.querySelector('#todoBottom');
    //무엇을
    let html =``
        for(let inedx=0; index<=할일목록.length-1; index++){
            //index는 0부터 할일목록내 마지막인덱스까지 1씩증가 반복
            //만약에 index 번째의 할일 객체내 할일 상태가 true이면 'success'클래스명을 넣어주고 아니면''공백을 넣는다.
            let info = 할일목록[index]; //index번째의 객체(할일) 꺼내기
            html +=`  <div class="contentBox${info.할일상태==true?'success':''} ">  
                <div class="content">${info.할일내용} 밥먹기 </div>
                <div class="contentBtns">
                    <button class="updateBtn" >수정</button>
                    <button onclick="삭제함수(${info.할일코드})" class="deleteBtn" >삭제</button> 
                </div> <!-- contentBtns end -->
            </div> <!-- contentBox end -->
        </div> <!-- todoBottm end -->
    </div> <!-- wrap end --> `
        }
    //출력
    todoBottom.innerHTML = html;
    return;
}

//[4] 수정함수 할일코드 리 x
function 수정함수( ){
    전체출력함수();
    return;
}
//[5] 삭제함수 할일코드  리 x
//1.배열내 삭제할 요소(객체)를 찾기
//2.배열 내 요소(객체) 삭제 , .splice( ) , 인덱스 필요
function 삭제함수(삭제할일코드){
    //1.배열 내 삭제할 요소(객체)를 찾기
    for(let index=0; inedx<=할일목록.length-1; index++){
        if(할일목록[index].할일코드 == 삭제할일코드){
            할일목록.splice(index,1);
            break;//삭제 성공했을 때 가장 가까운 반복분 종료.
        }
    }
    전체출력함수();
    return;
}
