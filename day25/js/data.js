/*localStorage에 배열정보 불러오기 함수 */
function getBoardList(){
//1.localStorage에 배열 정보 요청 ,key
localStorage.getItem('boardList') //1.localStorage 에  배열정보 요청
if (boardList == null){ //2.만약에 localStroage 비어있으면
    boardList = []; // 빈 배열 대입해주고
}else{   // 있으면
    boardList = JSON.parse(boardList);  //4.JSON(js)객체로 변환해서 대입
}
return boardList; //5.현재 함수를 호출했던곳으로 게시물 배열을 반환/준다.

}//f end
// 2. localStorage 에 게시물 배열 정보 저장 함수
function setBoardList(){

    localStorage.setItem('boardList',JSON.stringify(boardList));

}