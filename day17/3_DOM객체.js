/*
    객체
        -속성과 함수 를 가질 수 있는 자료 구조/타입
        -객체는.(접근 연산자)를 이용하여 속성의값과 함수 호출
            변수명.속성명       변수명.함수명( )
        -내가 만든객체 vs 남이 만든 객체(라이브러리)
            남이 만든객체 :
             1.console.log( ) / console 객체 내 log 함수 호출
             2.document.qureySelector( ) / document 객체 내 querySelector( )함수 호출

    DOM객체
        - js 회사에서 미리 만들어진 HTML 관련 객체 제공 , 왜 ?  js 에서 HTML 조작하기 위해서.
        -document 객체내 속성과 함수 는 무엇이 있나 ? 너무많고 다양하다
        1.document write ( '출력할 내용 ' )  : HTML에 출력할 내용을 출력해주는 함수.
        2. document.querySelector('선택자')  : HTML에 지정한 선택자의 마크업을 개체로 반환 함수
        -document : 현재 js가 위치한 HTML 을 객체화 (HTML,CSS 조작하기 위해)
        3. document.querySelectorAll('선택자') : HTML 지정한 선택자의 모든 마크업을 객체타입으로 반환함수
            -선택자 (css 동일)  : 1.마크업 2.. 클래스명 3.#id명 4. >자식 5. 띄어쓰기 자손 등등
        -요소(마크업) 객체 주요 속성/함수 , 웬만한 마크업들의 속성들을 js에서도 접근이 가능하다.
            1. .value
                -사용가능한 요소 : <input/> , <select/>, <textara / > 등등 
                -사용불가능한 요소 : <div> , <table> , <span> 등등
                <호출> document.querySelector('선택자').value
                <대입> document.querySelector('선택자').value= 새로운값

            2. .innerHTML : 지정된 마크업의 시작마크업과 끝마크업의 > 사이 < 가 inner , 마크업 사이에 HTML 호출/대입
                -사용가능한 요소 : <div> , <table> ,<span> 등등
                -사용불가능한 요소 : <input/> , <selcet/> , <img/> 등등
            3. .style : 지정된 마크업의 style 속성을 이용한 css 조작
                -모든 마크업
                <호출> document.querySelector('선택자').style
                <대입> document.querySelector('선택자').style='css문법'

            4. .src :  지정된 마크업의 src 속성값 호출/대입
                - 사용가능한 요소 : <img src=""/> , <audio src=""/> , <viedo src="" /> 등등

        *DOM 트리 *
            document
                html
                    head
                        title
                        style
                    body
                        div
                            table
                        table
                        span   
 
        */ 
//[1]
console.log(document);
//[2]
console.log(document.querySelector('title')); //<title>마크업을 JS 객체로 반환
console.log(document.querySelector('body')); // <body> 마크업을 JS 객체타입으로 반환
//[3]
console.log(document.querySelector('div'));   // <div> 마크업을 js 객체타입으로 반환 [ 객체 ]
console.log(document.querySelectorAll('div')); // <div> 마크업을 js 객체타입으로 모두 반환[배열]
console.log(document.querySelector('.box2'));  // < div > 마크업중에서 class 속성이 'box2'인 마크업을 js 객체 타입으로 반환
console.log(document.querySelector('#box3'))  // < div> 마크업중에서 id 속성이 'box3'인 마크업을 js의 객체타입으로 반환

//[4]
let box2 = document.querySelector('box2');
console.log(box2)
let box22 = document.querySelector('box2').innerHTML;
console.log(box22)

