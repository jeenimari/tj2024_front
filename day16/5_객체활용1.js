let 사원1 = { 사원번호: 1, 사원명: '유재석', 생년월일: '2000-10-02' }
let 사원2 = { 사원번호: 2, 사원명: '강호동', 생년월일: '1980-01-25' }

let 사원목록 = []
사원목록.push(사원1); // 사원1 등록 
사원목록.push(사원2); // 사원2 등록 
console.log(사원목록); // 현재 전체 사원의 정보 전체 출력

let 점수1 = { 사원번호: 1, 연도: '2024', 상반기: 100, 하반기: 80 }; // 유재석의 2024 평가 등록 
let 점수2 = { 사원번호: 2, 연도: '2024', 상반기: 92, 하반기: 71 }; // 강호동의 2024 평가 등록 
let 점수3 = { 사원번호: 1, 연도: '2023', 상반기: 82, 하반기: 97 }; // 유재석의 2023 평가 등록 

let 평가목록 = []
평가목록.push(점수1);
평가목록.push(점수2);
평가목록.push(점수3);
console.log(평가목록);

//[*] 사원번호 전역변수 
let eno = 3; // <--- 샘플 2개(사원2개)라서 다음 등록된 사원번호는 3번부터 시작


function 사원등록() {

    let name = document.querySelector('.name').value;
    let birth = document.querySelector('.birth').value;

    let info = {
        사원번호: eno, // 사원번호는 자동 으로 1씩 증가 
        사원명: name, // 사원명은 입력받은 name 
        생년월일: birth // 생년월일은 입력받은 birth 
    };

    사원목록.push(info);
    eno++; // 만일 사원등록 성공시 eno(사원번호) 1 증가한다. // -> 다음 회원은 1증가된 사원번호를 받을 예정 

    사원전체출력();
}// f end 


사원전체출력();
function 사원전체출력() {
    let tbody = document.querySelector('.사원테이블');
    let html = ``;
    for (let index = 0; index <= 사원목록.length - 1; index++) {

        let info = 사원목록[index];
        html += `<tr>
                        <td> ${info.사원번호}</td>
                        <td> ${info.사원명} </td>
                        <td> ${info.생년월일} </td>
                        <td> 
                            <button onclick="평가등록출력( ${info.사원번호} )" type="button">평가등록</button>
                            <button type="button">평가결과</butoon>
                        </td>
                    </tr>`
    }

    tbody.innerHTML = html;
}

function 평가등록출력(클릭된사원번호) {

    let 검색사원 = null;
    for (let index = 0; index <= 사원목록.length - 1; index++) {
        let info = 사원목록[index];
        if (info.사원번호 == 클릭된사원번호) {
            검색사원 = info; // 
            break;
        }
    } // f end 
    if (검색사원 == null) {
        alert('사원정보가 없습니다.');
        return;
    }

    let div = document.querySelector('.평가입력구역')

    let html = `<h3> 사원 평가 등록 </h3>
                    <form>
                        <h5> 평가사원명 : ${검색사원.사원명} </h5>
                        평가연도 : <input type="text" />
                        상반기평가 : <input type="text" />
                        하반기평가 : <input type="text"/> 
                        <button type="button"> 점수 등록 </button>
                    </form>`
    // 3, 출력 
    div.innerHTML = html
} // f end 

function 평가등록( ){

}
