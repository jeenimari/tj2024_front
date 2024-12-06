/*
    객체 : 여러가지 자료를 하나의 자료 타입 구조
        객체2개 : 
        1.내가만든객체 
        2.(미리존재한)남이만든객체 : document , console , new Date( ) 등등
            ->남이 미리 데이터/함수 제공 함으로써 빠른개발이 가능하다.(도구 제공)
            -> 내가 집을 만드는데 도구는 사서 이용한다.(라이브러리)

        세션 과 쿠키
            -브라우저에(HTTP 통신 과 HTML /CSS/ JS 코드를 렌더링/그려주는프로그램)
            -브라우저 F12 -> [Application] -> 왼쪽 사이드 메뉴 ( ldca storage(쿠키))/session storage(세션)
            1.세션 : 사용자가 웹페이지를 방문하고 있는 동안 메모리를 저장 하는 공간. 브라우저 꺼지면 메모리 삭제
            ex ) 검색엔지, 임시데이터
            2.쿠키 : 사용자가 웹페이지의 방문이 끝나도 메모리 저장 하는 공간, 브라우저 꺼져도 메모리 유지. ( 사용자가 직접삭제 )
             ex ) 자동로그인 기능 구현
             객체 : localStorage 객체의 속성 /기능 
             sessionStorage / localstorage 객체의 속성 / 기능제공
             -.(도트/접근)연산자 : 객체내 속성 값 접근 /호출 사용

             1.setItem('key' ,value ) : 세션 / 쿠키 값 저장 하는 함수  , key와 value 한쌍으로 저장 구조
             2.getItem('key' ) : 세션 / 쿠키 값 호출 하는 함수  , key를 호출함으로써 value 가 반환되는 구조
             *주의할점 : 세션과 쿠키는 무조건 문자열로 구성된 자료 , 문자만 저장이 가능, 배열이나 객체는 저장할 수 없다.
             해결책 : 타입 변환 ()
                문자열< --- ---> 객체(json)
    
    json? java script object 자바 스크립트 객체  , 자바스크립트 객체문법의 형식
        -실무에서 많이사용되는 형식 , JSON/XML / CSV 형식
        1.JSON.stringify({속성명 : 값, 속성명 : 값 }) : { }  --->문자열 : '{(속성명:값 , 속성명 : 값)}'
        2.JSON.parse('{속성명 : 값 , 속성명 : 값}') : 문자열----> { } : {속성명 : 값 , 속성명 : 값}
        -> 3 와 '3' 은 다르다
        -> { } 와 '{ }'은 다르다
 */

console.log(sessionStorage)  // 세션
console.log(localStorage)  // 쿠키

//[2] / 쿠키 데이터 삽입 , 키 와 값을 한쌍으로 하는 데이터 구조  
sessionStorage.setItem('name','유재석');
localStorage.setItem('age',40)

//[3] 세션 / 쿠키 데이터 호출 , 키를이용한 값 호출
let 반환값1 = sessionStorage.getItem('name'); console.log(반환값1); // 유재석
let 반환값2 = localStorage.getItem('age'); console.log(반환값2);  // 40
let 반환값3 = sessionStorage.getItem('phone'); console.log(반환값3); // null(객체가 없다는 뜻)


//[4] 관례적으로 세션과 쿠키에 객체를 대입하는 방법 , JSOM 객체 활용
console.log(JSON.stringify({'name':'유재석'}) ); //{"name:"유재석"} -> ' {              }      
console.log(JSON.parse(
    '{"name" : "유재석"}'
));

//sessionStorage.setItem('할일',{"할일내용":"밥먹기",할일상태 : true}); // 객체타입을 저장할 수 없다.

sessionStorage.setItem('할일',{"할일내용":"밥먹기",할일상태 : true}); // 객체타입을 저장할 수 없다.

let 반환값4 = sessionStorage.getItem('할일'); console.log(반환값4);   //'{"할일내용":"밥먹기","할일상태":true}' // 문자열
console.log( JSON.parse(반환값4)) //{할일내용 : '밥먹기 ' , 할일상태 true} // 객체