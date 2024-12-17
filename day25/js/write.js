/*중간과제 쓰기 관련 코드 복사붙여넣기
 */
function 등록함수() {
    console.log('등록함수 실행')

    let title = document.querySelector('.title').value; 
   
    let content = document.querySelector('.content').value;

    let password = document.querySelector('.password').value; 

  
    let nowDate = new Date() 
    let nowYear = nowDate.getFullYear() 
    let nowMonth = nowDate.getMonth() + 1; 
    let nowDay = nowDate.getDate() 
    let date = `${nowYear}-${nowMonth}-${nowDay}`; 

    let view = 0
    getBoardList(); // 1.게시물 배열 호출
    //게시물 번호(식별자) ,만약에 게시물 배열이 존재하면 마지막 게시물 번호 + 1 , 아니면 1(첫 게시물)
    //배열 변수명 .length  : 배열 내 마지막요소의 인덱스 번호
    let bno = boardList.length != 0 ? boardList[boardList.length-1].bno+1:1
    let board = {
        bno : bno ,
        title : title , content :content,
        password : password , date : date , view : view
    };
   
    게시물목록.push(board); 
    출력함수();
    // 2.배열상태를 localStoage 등록
    setBoardList();
    //3.메세지 안내
    alert('게시물 등록 성공')
    //4.js 에서 <a>마크업과 동일한 기능 , js에서 페이지 전환함수
    location.href="board.html";
}