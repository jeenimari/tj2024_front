/*
문자열 처리방법 (기능이 없는 문자 그자체)방법
1.키워드(문자인데 기능 이 있는 문자들)

*/

//console.log('유재석') ==>문자(미리 정의된/의미.기능이 포함된 문자 즉 함수임)
//console.log('유재석1')
//console.log("유재석2")
//console.log(`유재석3`)

//[1]문자열 처리
//console.log("유재석'반장'")

//[3] 이스케이프/제어문자,키보드 엔터 위에 원화기호(백슬래시)

// 1. \n :줄바꿈
// 2. \" : "한개 출력, \"\"
// 3. \' : '한개 출력 , \'\'
// 4. \\ : \한개 출력 , \\\\
// 5. \n : consle의 한 줄 내림(줄바꿈)
// 6. \t : 들여쓰기 들어감 (탭키)
//console.log('유재석\n\'반장\'')
//console.log('유재석\n강호동')
//console.log('유재석\'강호동')
//console.log('유재석\\강호동')
//console.log('유재석\t강호동')

//[4] 문자열 템플릿 (`백틱`) 템플릿
/*conosle.log('유재석'+'강호동')
console.log('유재석'+40)
console.log('40' + '100')
let age = 40;
console.log('유재석'+ age)
console.log(`유재석${age}`)  //`문자A${js코드=선언}문자B` 유재석40강호동
console.log(`평균:${100+50}`)

//js 학습 목적 :HTML를 조작/제어/이벤트 하기 위해서
/*let 직원명1='유재석'
let 직원명2='강호동'
let nameHTML = `<ol><li>유재석</li><li>${직원명2}</li></ol>`
document.write(nameHTML) //document(HTML) : 현재 HTML에 출력하는 함수*/



//예 1 : 입력받은 데이터를 HTML 출력하시오
//prompt('[알람내용]데이터 입력해주세요') 

//예 2 : 2명의 사원이름을 입력받아서 HTML(table)형식으로 출력하시오.
// HTML은 연산X , 저장x 등등 없으므로 텍스트 그 자체임
//새로운 값/데이터 을 입력받아서 데이터 가공하기 위해서 js 사용
//순서도(알고리즘) , 어떠한 작업의 순서/절차
    //1. 1명의사원의 이름을 입력받음        prompt , 함수-반환값 : 입력받은 값
    //2. 입력받은 사원이름을 변수에 저장함  let 사원1=prompt()
    //3. 또다른 1명의 사원이름을 입력받음   prompt() , 반환값 : 입력받은 값
    //4. 입력받은 사원이름을 변수에 저장함   let 사원2 = prompt()
    //5. HTML형식의 문자로 출력할 변수와 구성함
    //6. 구성된 HTML형식의 문자 를 HTML문서에 출력함
    //  -변수를 사용하는 이유 : 다음코드에서 사용(출력 목적) 할려고
let 사원1=prompt('사원명1 입력해주세요')
let 사원2=prompt('사원명2 입력해주세요')
let output=`<tabel>
        <tr>
            <th>번호</th><th>사원명</th>
        </tr>
        <tr>
            <td>1</td><td>${사원1}</td>
        </tr>
        <tr>
            <td>2</td><td>${사원2}</td>
        </tr>
   </tabel>`
document.write(output)